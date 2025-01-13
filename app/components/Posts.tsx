import { Suspense, useContext, useState } from "react";
import { usePost } from "../services/queries";
import { Post } from "../types/Post";
import { useCreatePost } from "../services/mutations";
import { AppContext, AppState } from "../context/AppContext";

const Posts = () => {
  const { user } = useContext(AppContext) as AppState;
  const { data: posts, isValidating } = usePost();
  const { trigger, isMutating } = useCreatePost();
  const [post, setPost] = useState<Partial<Post> | null>(null);

  const handleAddPost = async () => {
    if (post) {
      trigger(
        { ...post, userId: Number(user?.id) },
        {
          // Actualiza la UI de inmediato con los nuevos datos
          optimisticData: posts && [...posts, post],
          // Si hubo algún error al actualizar, borra lo que se hizo en el optimisticData:
          rollbackOnError: true,
        }
      );
    }
  };

  return (
    <div>
      <h5>Posts</h5>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </Suspense> */}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h5>Add Post</h5>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) =>
            setPost((current) => ({ ...current, title: e.target.value }))
          }
          value={post?.title}
        />
        <input
          type="text"
          placeholder="Content"
          onChange={(e) =>
            setPost((current) => ({ ...current, content: e.target.value }))
          }
          value={post?.content}
        />
        <button onClick={handleAddPost} disabled={isMutating || isValidating}>
          Add button
        </button>
      </div>
    </div>
  );
};

export default Posts;
