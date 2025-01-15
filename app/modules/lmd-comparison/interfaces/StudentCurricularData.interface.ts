import { DescriptionEntity } from "./Entity.interface";

export type Subject = {
  id: number;
  name: string;
  calificationNote: string | null;
  condition: number | null;
  month: number | null;
  year: number | null;
  establishment: string | null;
};

// export interface SubjectsBySchoolYear {
//   schoolYear: number;
//   subjects: Array<Subject>;
// }

export interface StudentCurricularData {
  level: DescriptionEntity;
  // schoolYears: Array<SubjectsBySchoolYear>;
  subjects: Array<Subject>;
}

export interface PutCurricularData
  extends Pick<Partial<StudentCurricularData>, "subjects"> {
  levelId: number;
}
