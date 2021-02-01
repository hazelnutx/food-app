import { BrandedFood } from "./types/BrandedFood";
import { get } from "./get";
import { CommonFood } from "./types/CommonFood";

export const searchInstant = (query: string) =>
  get<SearchInstantResponse>(
    "search/instant?query=" + encodeURIComponent(query)
  );

export type SearchInstantResponse = {
  branded: BrandedFood[];
  common: CommonFood[];
};
