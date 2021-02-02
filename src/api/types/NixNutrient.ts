import { NixNutrientId } from "./NixNutrientId";

/**
 * Nutrient data exposes by the nutritionix API
 */
export type NixNutrient = {
  attr_id: NixNutrientId;
  value: number;
};
