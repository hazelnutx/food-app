import { RichFood } from "./types/RichFood";
import { Food } from "../state/Food";

/**
 * Translates from nutritionix RichFood to our application specific Food type
 */
export const parseFood = (food: RichFood): Food => ({
  id: food.nix_item_id,
  name: food.food_name,
  kcal: food.nf_calories,
  servingQuantity: food.serving_qty,
  servingUnit: food.serving_unit,
});
