import { Food } from "../state/Food";

/**
 * Describes the calories per serving size of a food item
 */
export const describeServing = ({
  servingUnit,
  servingQuantity,
  kcal,
}: PartialFood) => `${kcal} kcal / ${servingQuantity} ${servingUnit}`;

/**
 * The food information necessary to describe a serving
 */
type PartialFood = Pick<Food, "servingUnit" | "servingQuantity" | "kcal">;
