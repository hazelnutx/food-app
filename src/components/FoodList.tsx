export type FoodListProps = {
  variant?: FoodListVariant;
};

/**
 * normal: A normal material-ui List with ListItems
 * add: The same material-ui List with ListItems except the ListItems have button
 * mode enabled and an add icon is displayed for each item
 */
export type FoodListVariant = "normal" | "add";

export const FoodList = ({ variant = "normal" }: FoodListProps) => (
  <>FoodList</>
);
