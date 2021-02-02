import { NixItemId } from "./NixItemId";

/**
 * Represents the items in the `branded` property returned from the nutritionix API /v2/search/instant
 */
export type BrandedFood = {
  food_name: string;
  image: string;
  serving_unit: string;
  nix_brand_id: string;
  brand_name_item_name: string;
  serving_qty: number;
  nf_calories: 560;
  brand_name: string;
  brand_type: number;
  nix_item_id: NixItemId;
};
