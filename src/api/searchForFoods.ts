import { Food } from "../state/Food";
import { searchInstant } from "./nutritionix/searchInstant";
import { capitalize } from "@material-ui/core";

/**
 * Gets a list of Food objects matching the specified query from the Nutritionix API.
 */
export const searchForFoods = async (query: string): Promise<Food[]> => {
  const { branded, common } = await searchInstant(query);
  return [...common, ...branded].map((brandedFood) => ({
    name: capitalize(brandedFood.food_name),
  }));
};
