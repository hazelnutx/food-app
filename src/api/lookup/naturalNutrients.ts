import { apiCall } from "../apiCall";
import { RichFood } from "../types/RichFood";

/**
 * Nutritionix API /v2/natural/nutrients
 */
export const naturalNutrients = (query: string) =>
  apiCall<NaturalNutrientsResponse>("natural/nutrients", {
    method: "post",
    body: JSON.stringify({
      query,
    }),
  });

export type NaturalNutrientsResponse = {
  foods: RichFood[];
};
