/**
 * The Food type used as state in the react application.
 * Any API data types will eventually be parsed into this.
 */
export type Food = {
  id: string;
  name: string;
  kcal: number;
  servingQuantity: number;
  servingUnit: string;
};
