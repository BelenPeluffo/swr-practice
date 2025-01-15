import { useContext } from "react";
import {
  CurricularDataContext,
  CurricularDataState,
} from "../contexts/CurricularData/CurricularData.provider";
import CurricularTable from "../components/CurricularTable.component";
import { Tab, Tabs } from "@mui/material";

const LMDComparison = () => {
  const { levelData, setSelectedLevel, selectedLevel } = useContext(
    CurricularDataContext
  ) as CurricularDataState;
  return (
    <div>
      <Tabs>
        {levelData?.levels.map((level) => (
          <Tab
            key={level.id}
            label={level.description}
            onClick={() => setSelectedLevel(level.id)}
            sx={{
              border: selectedLevel === level.id ? "1px solid #000" : "none",
            }}
          />
        ))}
      </Tabs>
      {selectedLevel ? <CurricularTable /> : "Seleccione un nivel"}
    </div>
  );
};

export default LMDComparison;
