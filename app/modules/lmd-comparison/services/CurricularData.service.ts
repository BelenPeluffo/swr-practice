import fetcher from "../../code-genix-practice/services/fetcher";
import {
  GetCurricularDataTrigger,
  GetPersonalDataTrigger,
  PutCurricularDataTrigger,
} from "../interfaces/api/ServiceTriggers.interface";
import { LevelData } from "../interfaces/Level.interface";
import {
  PutCurricularData,
  StudentCurricularData,
} from "../interfaces/StudentCurricularData.interface";
import { CommonService } from "./Common.service";

export class CurricularDataService extends CommonService {
  // Acá irían declaradas las llamadas a API
  static async getLevelsData(
    url: string
    // queryParams: GetPersonalDataTrigger
  ): Promise<LevelData> {
    // const { studentId } = queryParams;
    const result = await CurricularDataService.getData(url);
    return result;
  }

  static async getCurricularData(
    url: string
    // queryParams: GetCurricularDataTrigger
  ): Promise<StudentCurricularData> {
    // const { studentId, levelId } = queryParams;
    // const levelParam = typeof levelId === "number" ? `&levelId=${levelId}` : "";
    const result: StudentCurricularData = await CurricularDataService.getData(
      url
    );
    return result;
  }

  static async updateCurricularData(
    data: PutCurricularData,
    queryParams: PutCurricularDataTrigger
  ): Promise<void> {
    const { studentId, schoolYears } = queryParams;
    const result = await FolioService.putData(
      `curricular-data?studentId=${studentId}&schoolYears=${schoolYears}`,
      data
    );
    console.log("result?", result);
  }
}
