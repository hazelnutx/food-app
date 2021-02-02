import { Photo } from "./Photo";

/**
 * Represents the items returned from the nutritionix APIs /v2/search/instant or /v2/natural/nutrients
 */
export type RichFood = {
  food_name: string;
  brand_name: string;
  serving_qty: number;
  serving_unit: string;
  serving_weight_grams: null;
  nf_calories: number;
  nf_total_fat: number;
  nf_saturated_fat: number;
  nf_cholesterol: number;
  nf_sodium: number;
  nf_total_carbohydrate: number;
  nf_dietary_fiber: number;
  nf_sugars: number;
  nf_protein: number;
  nf_potassium: number;
  nf_p: number;
  full_nutrients: Array<{
    attr_id: number;
    value: number;
  }>;
  nix_brand_name: string;
  nix_brand_id: string;
  nix_item_name: string;
  nix_item_id: string;
  metadata: unknown;
  source: number;
  ndb_no: number;
  tags: unknown;
  alt_measures: unknown;
  photo: Photo;
};
