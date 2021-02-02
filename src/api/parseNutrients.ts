import { NixNutrient } from "./types/NixNutrient";
import { Nutrient } from "../state/Nutrient";
import { nutrientMetaDataById, NutrientMetaDataItem } from "./nutrientMetaData";

/**
 * Translates from a list of NixNutrient to a list of our application specific Nutrient type.
 * Ignores unknown nutrients (that has missing meta data) since we lack presentation for them.
 */
export const parseNutrients = (nixNutrients: NixNutrient[]) =>
  nixNutrients.reduce((parsed, nixNutrient) => {
    const metaData = nutrientMetaDataById.get(nixNutrient.attr_id);
    if (metaData) {
      parsed.push(parseNutrient(nixNutrient, metaData));
    }
    return parsed;
  }, [] as Nutrient[]);

const parseNutrient = (
  { attr_id, value }: NixNutrient,
  { name, unit }: NutrientMetaDataItem
): Nutrient => ({
  id: attr_id,
  name,
  unit,
  value,
});
