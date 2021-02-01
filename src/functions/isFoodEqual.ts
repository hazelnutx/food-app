import { Food } from "../state/Food";

export const isFoodEqual = (a: Food, b: Food) => a.id === b.id;
