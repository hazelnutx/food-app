import { BrandedFood } from "../types/BrandedFood";
import { searchItem } from "../lookup/searchItem";
import { parseFood } from "../parseFood";

/**
 * Gets rich food information for the specified BrandedFood
 */
export const getRichFoodByBranded = async (branded: BrandedFood) => {
  const {
    foods: [brandedFoodWithNutrients],
  } = await searchItem(branded.nix_item_id);
  if (brandedFoodWithNutrients) {
    return parseFood(brandedFoodWithNutrients);
  }
};
