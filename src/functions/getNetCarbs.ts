import { NixNutrientId } from "../api/types/NixNutrientId";
import { Nutrient } from "../state/Nutrient";
import { nutrientMetaData as nmd } from "../api/nutrientMetaData";

/**
 * Finds carbs and fibers in the specified nutrient list and calculates net carbs.
 * If no carbs are available return undefined since it doesn't make sense to derive net carbs from nothing.
 */
export const getNetCarbs = (
  nutrients: Nutrient[],
  name = "Net Carbs"
): Nutrient | undefined => {
  const carbs = nutrients.find(({ id }) => id === nmd.carbohydrates.id);
  const fiber = nutrients.find(({ id }) => id === nmd.fiber.id);
  const net = carbs ? carbs.value - (fiber ? fiber.value : 0) : 0;
  if (!carbs) {
    return;
  }
  return {
    id: -1 as NixNutrientId, // Derived, not persisted, so no id exist
    name,
    value: net,
    unit: nmd.carbohydrates.unit,
  };
};
