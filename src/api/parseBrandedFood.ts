import { Food } from "../state/Food";
import { BrandedFood } from "./nutritionix/types/BrandedFood";

export const parseBrandedFood = (branded: BrandedFood): Food => {
  return { id: branded.nix_item_id, name: branded.food_name };
};
