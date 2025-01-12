import useSWR from "swr";
import { User } from "../types/User";
import { Post } from "../types/Post";

export function useUser() {
  return useSWR<User>("users");
}

export function usePost(userId?: number) {
  return useSWR<Post[]>(userId ? `posts?userId=${userId}` : null);
}
