import { Food } from "../state/Food";
import { searchInstant } from "./nutritionix/searchInstant";
import { parseCommonFood } from "./parseCommonFood";
import { parseBrandedFood } from "./parseBrandedFood";

/**
 * Gets a list of Food objects matching the specified query from the Nutritionix API.
 */
export const searchForFoods = async (query: string): Promise<Food[]> => {
  const { branded, common } = await searchInstant(query);
  // Normalizing branded and common foods into a single type
  // It's theoretically risky since their ids could possibly overlap,
  // but that's fine for this demo apps purposes
  const brandedFood = branded.map(parseBrandedFood);
  const commonFood = common.map(parseCommonFood);
  return [...commonFood, ...brandedFood];
};
