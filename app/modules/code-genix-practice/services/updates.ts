import { Post } from "../types/Post";
import fetcher from "./fetcher";

export async function createPost(url: string, { arg }: { arg: Partial<Post> }) {
  // La firma del método debe ser exactamente (url, { arg }) porque así lo precisa
  // SWR. En arg iría el objeto a mandar en el body.
  await fetch(`http://localhost:3000/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
}

export async function login(userId: string) {
  return fetcher(`users/${userId}`);
}
