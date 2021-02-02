import { Photo } from "./Photo";

/**
 * Represents the items in the `common` property returned from the nutritionix API /v2/search/instant
 */
export type CommonFood = {
  food_name: string;
  serving_unit: string;
  tag_name: string;
  serving_qty: number;
  common_type: unknown;
  tag_id: string;
  photo: Photo;
  locale: string;
};
