/**
 * Siphoned from nutritionix.com source code.
 * Could not find in documentation.
 */
import { NixNutrientId } from "./types/NixNutrientId";

/**
 * Known nutrients and their presentation data.
 *
 * Entries in this record will determine what nutrients gets parsed from nutritionix API responses.
 * Application will use this record to refer to specific nutrients.
 */
export const nutrientMetaData = {
  calories: { id: 208 as NixNutrientId, name: "Calories", unit: "kcal" },
  carbohydrates: { id: 205 as NixNutrientId, name: "Carbohydrates", unit: "g" },
  fat: { id: 204 as NixNutrientId, name: "Fat", unit: "g" },
  saturatedFat: { id: 606 as NixNutrientId, name: "Saturated Fat", unit: "g" },
  protein: { id: 203 as NixNutrientId, name: "Protein", unit: "g" },
  sugar: { id: 269 as NixNutrientId, name: "Sugar", unit: "g" },
  fiber: { id: 291 as NixNutrientId, name: "Fiber", unit: "g" },
  sodium: { id: 307 as NixNutrientId, name: "Sodium", unit: "mg" },
  cholesterol: { id: 601 as NixNutrientId, name: "Cholesterol", unit: "mg" },
  potassium: { id: 306 as NixNutrientId, name: "Potassium", unit: "mg" },
  vitaminA: { id: 318 as NixNutrientId, name: "Vitamin A", unit: "mg" },
  vitaminB12: { id: 418 as NixNutrientId, name: "Vitamin B12", unit: "mg" },
  vitaminC: { id: 401 as NixNutrientId, name: "Vitamin C", unit: "mg" },
  vitaminD: { id: 324 as NixNutrientId, name: "Vitamin D", unit: "mg" },
  vitaminE: { id: 323 as NixNutrientId, name: "Vitamin E", unit: "mg" },
  calcium: { id: 301 as NixNutrientId, name: "Calcium", unit: "mg" },
  iron: { id: 303 as NixNutrientId, name: "Iron", unit: "mg" },
};

/**
 * Id lookup version of `nutrientMetaData`
 */
export const nutrientMetaDataById = Object.values(nutrientMetaData).reduce(
  (map, meta) => map.set(meta.id, meta),
  new Map<NixNutrientId, NutrientMetaDataItem>()
);

/**
 * Presentation data for a nutrient
 */
export type NutrientMetaDataItem = {
  id: NixNutrientId;
  name: string;
  unit: string;
};
