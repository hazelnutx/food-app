import { apiCall } from "../apiCall";
import { NixItemId } from "../types/NixItemId";
import { RichFood } from "../types/RichFood";

/**
 * Nutritionix API /v2/search/item
 */
export const searchItem = (nixItemId: NixItemId) =>
  apiCall<SearchItemResponse>(
    "search/item?nix_item_id=" + encodeURIComponent(nixItemId)
  );

export type SearchItemResponse = {
  foods: RichFood[];
};
