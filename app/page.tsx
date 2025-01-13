"use client";
// import AppProvider from "./modules/code-genix-practice/context/AppContext";
// import Practice from "./modules/code-genix-practice/pages/Practice";
import LMDComparison from "./modules/lmd-comparison/pages/LMDComparison";

export default function Home() {
  return (
    <div>
      {/* <AppProvider>
        <Practice />
      </AppProvider> */}
      <LMDComparison />
    </div>
  );
}
