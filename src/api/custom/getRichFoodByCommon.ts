import { CommonFood } from "../types/CommonFood";
import { naturalNutrients } from "../lookup/naturalNutrients";
import { parseFood } from "../parseFood";
import { capitalize } from "@material-ui/core";

/**
 * Gets rich food information for the specified CommonFood
 */
export const getRichFoodByCommon = async (common: CommonFood) => {
  const {
    foods: [brandedFoodWithNutrients],
  } = await naturalNutrients(common.food_name);
  if (brandedFoodWithNutrients) {
    const food = parseFood(brandedFoodWithNutrients);
    // Common food names have no user friendly formatting so we capitalize to make up for that
    food.name = capitalize(food.name);
    return food;
  }
};
