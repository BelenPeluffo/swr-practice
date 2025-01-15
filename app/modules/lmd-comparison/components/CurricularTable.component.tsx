import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import {
  CurricularDataContext,
  CurricularDataState,
} from "../contexts/CurricularData/CurricularData.provider";

const CurricularTable = () => {
  const { curricularData } = useContext(
    CurricularDataContext
  ) as CurricularDataState;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Espacio curricular</TableCell>
            <TableCell>Calificación</TableCell>
            <TableCell>Condición</TableCell>
            <TableCell>Mes</TableCell>
            <TableCell>Año</TableCell>
            <TableCell>Establecimiento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {curricularData?.subjects.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.calificationNote}</TableCell>
              <TableCell>{item.condition}</TableCell>
              <TableCell>{item.month}</TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>{item.establishment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurricularTable;
