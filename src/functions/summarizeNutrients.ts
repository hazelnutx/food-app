import { Food } from "../state/Food";
import { Nutrient } from "../state/Nutrient";
import { NixNutrientId } from "../api/types/NixNutrientId";

/**
 * Summarizes all the nutrients in the specified foods.
 * Returns the sums as a list of new Nutrient instances,
 * with their value property containing each individual sum.
 */
export const summarizeNutrients = (foods: Food[]) => {
  const sums = new Map<NixNutrientId, Nutrient>();
  for (const food of foods) {
    for (const nutrient of food.nutrientsPerUnit) {
      const current: Nutrient = sums.get(nutrient.id) ?? {
        ...nutrient,
        value: 0,
      };
      const newValue = current.value + nutrient.value * food.servingQuantity;
      const updated: Nutrient = { ...current, value: newValue };
      sums.set(nutrient.id, updated);
    }
  }
  return Array.from(sums.values());
};
