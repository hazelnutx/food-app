import { RichFood } from "./types/RichFood";
import { Food, FoodId } from "../state/Food";
import { parseNutrients } from "./parseNutrients";

/**
 * Translates from nutritionix RichFood to our application specific Food type
 */
export const parseFood = (food: RichFood): Food => ({
  id: (food.nix_item_id ?? food.tags.tag_id) as FoodId, // A bit ugly, but we just need a semi unique ID for the demo
  name: food.food_name,
  kcal: food.nf_calories,
  servingQuantity: food.serving_qty,
  servingUnit: food.serving_unit,
  nutrientsPerUnit: parseNutrients(food.full_nutrients),
});
