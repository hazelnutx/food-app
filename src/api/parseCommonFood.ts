import { CommonFood } from "./nutritionix/types/CommonFood";
import { Food } from "../state/Food";
import { capitalize } from "@material-ui/core";

export const parseCommonFood = (common: CommonFood): Food => {
  // Common food names have no user friendly formatting so we capitalize to make up for that
  return { id: common.tag_id, name: capitalize(common.food_name) };
};
