import { Nutrient } from "../state/Nutrient";

/**
 * Describes the value of a nutrient
 */
export const describeNutrientValue = ({ value, unit }: PartialNutrient) =>
  `${value.toFixed(2)} ${unit}`;

/**
 * The nutrient information necessary to describe a value
 */
type PartialNutrient = Pick<Nutrient, "value" | "unit">;
