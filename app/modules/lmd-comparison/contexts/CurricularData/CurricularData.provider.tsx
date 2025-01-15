import { createContext, Dispatch, SetStateAction, useState } from "react";
import useLMDComparisonSWR from "../../hooks/useLMDComparisonSWR";
import { StudentCurricularData } from "../../interfaces/StudentCurricularData.interface";
import { LevelData } from "../../interfaces/Level.interface";

export interface CurricularDataState {
  curricularData?: StudentCurricularData;
  levelData?: LevelData;
  selectedLevel: number | null;
  setSelectedLevel: Dispatch<SetStateAction<number | null>>;
}

export const CurricularDataContext = createContext<CurricularDataState | null>(
  null
);

const CurricularDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  // Acá se llamaría directamente al hook useLMDComparisonSWR
  const { levelData, curricularData } = useLMDComparisonSWR({
    studentId: 1,
    levelId: selectedLevel,
  });
  return (
    <CurricularDataContext.Provider
      value={{ selectedLevel, setSelectedLevel, levelData, curricularData }}
    >
      {children}
    </CurricularDataContext.Provider>
  );
};

export default CurricularDataProvider;
