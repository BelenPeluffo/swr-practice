"use client";
import { SWRConfig } from "swr";
import fetcher from "./modules/code-genix-practice/services/fetcher";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig value={{ fetcher: fetcher /*suspense: true*/ }}>
      {children}
    </SWRConfig>
  );
}
