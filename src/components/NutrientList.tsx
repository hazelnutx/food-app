import { List } from "@material-ui/core";
import { NutrientListItem } from "./NutrientListItem";

export const NutrientList = () => (
  <List>
    <NutrientListItem name="Calories" value="300" />
    <NutrientListItem name="Carbohydrates" value="300" />
    <NutrientListItem name="Protein" value="300" />
    <NutrientListItem name="Fat" value="300" />
  </List>
);
