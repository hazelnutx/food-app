import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import { Nutrient } from "../state/Nutrient";
import { describeNutrientValue } from "../functions/describeNutrientValue";

export type NutrientTableProps = {
  items: Nutrient[];
};

export const NutrientTable = ({ items }: NutrientTableProps) => (
  <TableContainer>
    <Table size="small" aria-label="a dense table">
      <TableBody>
        {items.map((nutrient) => (
          <TableRow key={nutrient.id}>
            <TableCell component="th" scope="row">
              {nutrient.name}
            </TableCell>
            <TableCell align="right">
              {describeNutrientValue(nutrient)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
