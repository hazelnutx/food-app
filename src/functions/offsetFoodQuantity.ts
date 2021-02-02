import { Food } from "../state/Food";

export const offsetFoodQuantity = (food: Food, offset: number): Food => ({
  ...food,
  servingQuantity: food.servingQuantity + offset,
});
