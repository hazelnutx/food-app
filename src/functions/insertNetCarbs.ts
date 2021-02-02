import { getNetCarbs } from "./getNetCarbs";
import { Nutrient } from "../state/Nutrient";
import { nutrientMetaData } from "../api/nutrientMetaData";

/**
 * Returns a copy of the specified nutrient list with net carbs added.
 * If possible net carbs will be inserted after carbs, otherwise at the beginning.
 */
export const insertNetCarbs = (nutrients: Nutrient[]): Nutrient[] => {
  const netCarbs = getNetCarbs(nutrients);

  // Return unchanged if net carbs can't be determined
  if (!netCarbs) {
    return nutrients;
  }

  const carbIndex = nutrients.findIndex(
    (nutrient) => nutrient.id === nutrientMetaData.carbohydrates.id
  );

  // Insert at beginning of list or after carbs
  const insertAtIndex = carbIndex !== -1 ? carbIndex + 1 : 0;
  const changed = nutrients.slice();
  changed.splice(insertAtIndex, 0, netCarbs);
  return changed;
};
