import { BrandedFood } from "../types/BrandedFood";
import { apiCall } from "../apiCall";
import { CommonFood } from "../types/CommonFood";

/**
 * Nutritionix API /v2/search/instant
 */
export const searchInstant = (query: string) =>
  apiCall<SearchInstantResponse>(
    "search/instant?query=" + encodeURIComponent(query)
  );

export type SearchInstantResponse = {
  branded: BrandedFood[];
  common: CommonFood[];
};
