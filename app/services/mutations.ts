import useSWRMutation from "swr/mutation";
import { usePost } from "./queries";
import { createPost } from "./updates";

/**
 * @module
 * Acá se crean los hooks para gestionar la actualización
 * de datos en DB y el triggereo del refetch para actualizar
 * la UI con los nuevos datos.
 */

export function useCreatePost() {
  const { mutate } = usePost();
  return useSWRMutation("posts", createPost, {
    onSuccess: () => {
      mutate();
    },
  });
}
