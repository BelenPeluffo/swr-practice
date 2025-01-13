import React, { useContext } from "react";
import { AppContext, AppState } from "../context/AppContext";
import Posts from "../components/Posts";
import Login from "../components/Login";
import Providers from "@/app/Providers";

const Practice = () => {
  const { user, setUser } = useContext(AppContext) as AppState;
  return (
    <Providers>
      {user ? (
        <div>
          <Posts />
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <Login />
      )}
    </Providers>
  );
};

export default Practice;
