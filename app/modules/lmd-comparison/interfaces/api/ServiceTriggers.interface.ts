export interface GetPersonalDataTrigger {
  studentId: number;
}

export interface GetCurricularDataTrigger extends GetPersonalDataTrigger {
  levelId?: number | null;
}

export interface PutCurricularDataTrigger extends GetPersonalDataTrigger {
  schoolYears: number;
}
