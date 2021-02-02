import { NixNutrientId } from "../api/types/NixNutrientId";

/**
 * The Nutrient type used as state in the react application.
 * Any API data types will eventually be parsed into this.
 */
export type Nutrient = {
  id: NixNutrientId;
  name: string;
  value: number;
  unit: string;
};
