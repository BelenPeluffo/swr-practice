"use client";
import { useContext } from "react";
import Login from "./modules/code-genix-practice/components/Login";
import Posts from "./modules/code-genix-practice/components/Posts";
import { AppContext, AppState } from "./modules/code-genix-practice/context/AppContext";

export default function Home() {
  const { user, setUser } = useContext(AppContext) as AppState;
  return (
    <div>
      {user ? (
        <div>
          <Posts />
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
