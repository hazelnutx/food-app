import { searchInstant, SearchInstantResponse } from "../lookup/searchInstant";
import { getRichFoodByCommon } from "./getRichFoodByCommon";
import { getRichFoodByBranded } from "./getRichFoodByBranded";
import { Food } from "../../state/Food";
import { BrandedFood } from "../types/BrandedFood";
import { CommonFood } from "../types/CommonFood";

/**
 * Gets a list of Food objects matching the specified query from the Nutritionix API.
 */
export const searchForFoods = async (
  query: string,
  limit = 5
): Promise<Food[]> => {
  const all = await searchInstant(query);

  // Limit the number of foods we select to
  // reduce the amount of batched requests in the next step
  // (We do it manually because there is no native limit in searchInstant above)
  const [common, branded] = select(all, limit);

  // Normalizing branded and common foods into a single type for convenience.
  // Note risk: It's theoretically risky since their ids could possibly overlap.
  // Also, performing batched requests to get nutrition information is very inefficient, and consumes our rate limit.
  // But all this is okay for the purposes of this demo app.
  const foods = await Promise.all([
    ...common.map(getRichFoodByCommon),
    ...branded.map(getRichFoodByBranded),
  ]);

  // Some lookups might have failed
  return foods.filter((food): food is Food => !!food);
};

/**
 * Select `count` number of foods from two arbitrary
 * lists of CommonFood and BrandedFood, prioritizing CommonFood.
 */
const select = (all: SearchInstantResponse, count: number) => {
  const selectedCommon: CommonFood[] = [];
  const selectedBranded: BrandedFood[] = [];
  while (count--) {
    if (all.common.length) {
      selectedCommon.push(all.common.shift()!);
    } else if (all.branded.length) {
      selectedBranded.push(all.branded.shift()!);
    }
  }
  return [selectedCommon, selectedBranded] as const;
};
