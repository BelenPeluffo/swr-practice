"use client";
import { useContext } from "react";
import Login from "./components/Login";
import Posts from "./components/Posts";
import { AppContext, AppState } from "./context/AppContext";

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
