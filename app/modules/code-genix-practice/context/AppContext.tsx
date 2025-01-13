"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { User } from "../types/User";

export interface AppState {
  user?: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const AppContext = createContext<AppState | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user]);
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
