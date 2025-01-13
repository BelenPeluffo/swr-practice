"use client";
import { useContext, useState } from "react";
import { AppContext, AppState } from "../context/AppContext";
import { login } from "../services/updates";

const Login = () => {
  const { setUser } = useContext(AppContext) as AppState;
  const [userId, setUserId] = useState("");

  const handleLogin = async () => {
    console.log("logging...");
    const user = await login(userId);
    console.log("user?", user);
    if (user) {
      console.log("setting user...");
      setUser(user);
    }
  };
  return (
    <div>
      <h4>You have to login</h4>
      <div>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button disabled={!userId} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
