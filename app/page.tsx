"use client";
import { SWRConfig } from "swr";
import CurricularDataProvider from "./modules/lmd-comparison/contexts/CurricularData/CurricularData.provider";
// import AppProvider from "./modules/code-genix-practice/context/AppContext";
// import Practice from "./modules/code-genix-practice/pages/Practice";
import LMDComparison from "./modules/lmd-comparison/pages/LMDComparison";
import { CurricularDataService } from "./modules/lmd-comparison/services/CurricularData.service";

export default function Home() {
  return (
    <div>
      {/* <AppProvider>
        <Practice />
      </AppProvider> */}
      <CurricularDataProvider>
        <SWRConfig>
          <LMDComparison />
        </SWRConfig>
      </CurricularDataProvider>
    </div>
  );
}
