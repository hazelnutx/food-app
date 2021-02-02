/**
 * A Nutritionix item id.
 *
 * Made nominal to avoid mistakes.
 *
 * Reasonable since there are a number of different string ids in the Nutritionix
 * response data with similar property names that could easily be mistaken for one another
 */
export type NixItemId = Nominal<string, "NixItemId">;
