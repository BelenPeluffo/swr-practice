import useSWR from "swr";
import { User } from "../types/User";
import { Post } from "../types/Post";
import { useContext } from "react";
import { AppContext, AppState } from "../context/AppContext";

export function useUser() {
  return useSWR<User>("users");
}

export function usePost() {
  const { user } = useContext(AppContext) as AppState;
  return useSWR<Post[]>(user ? `posts?userId=${user.id}` : null);
}
