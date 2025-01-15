import useSWR from "swr";
import { LevelData } from "../interfaces/Level.interface";
import { StudentCurricularData } from "../interfaces/StudentCurricularData.interface";
import useSWRMutation from "swr/mutation";
import { CurricularDataService } from "../services/CurricularData.service";

const MODULE_KEYS = {
  LEVEL_DATA: "level-data",
  CURRICULAR_DATA: "curricular-data",
};

const useLevelData = (studentId: number) => {
  return useSWR<LevelData>(
    `${MODULE_KEYS.LEVEL_DATA}/${studentId}`,
    CurricularDataService.getLevelsData
  );
};

const useCurricularData = (levelId: number | null) => {
  return useSWR<StudentCurricularData>(
    levelId ? `${MODULE_KEYS.CURRICULAR_DATA}/${levelId}` : null,
    CurricularDataService.getCurricularData
  );
};

const useUpdateCurricularData = (levelId: number | null) => {
  const { mutate } = useCurricularData(levelId);
  // return useSWRMutation(
  //   "curricular-data",
  //   CurricularDataService.updateCurricularData,
  //   {
  //     onSuccess: () => mutate(),
  //   }
  // );
};

const useLMDComparisonSWR = ({
  studentId,
  levelId,
}: {
  studentId: number;
  levelId: number | null;
}) => {
  // Acá definiríamos las instancias de SWR para cada EP:
  // GET de LEVEL_DATA
  const { data: levelData } = useLevelData(studentId);
  // GET de CURRICULAR_DATA
  const { data: curricularData } = useCurricularData(levelId);
  // PATCH de CURRICULAR_DATA
  return { levelData, curricularData };
};

export default useLMDComparisonSWR;
