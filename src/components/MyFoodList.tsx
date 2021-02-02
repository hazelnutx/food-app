import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from "@material-ui/core";
import {
  Add as PlusIcon,
  Delete as DeleteIcon,
  Remove as MinusIcon,
} from "@material-ui/icons";
import { Food } from "../state/Food";
import { describeServing } from "../functions/describeServing";
import { offsetFoodQuantity } from "../functions/offsetFoodQuantity";

export type MyFoodListProps = {
  items: Food[];
  onRemove: (item: Food) => void;
  onUpdate: (current: Food, updated: Food) => void;
};

/**
 * Lists the foods the user has chosen to add to their diet
 */
export const MyFoodList = ({ items, onRemove, onUpdate }: MyFoodListProps) => (
  <List>
    {items.map((food, index) => (
      <ListItem key={index}>
        <ListItemText primary={food.name} secondary={describeServing(food)} />
        <ListItemSecondaryAction>
          <Tooltip title="Decrease quantity">
            <IconButton
              aria-label="decrease quantity"
              disabled={food.servingQuantity <= 1}
              onClick={() => onUpdate(food, offsetFoodQuantity(food, -1))}
            >
              <MinusIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Increase quantity">
            <IconButton
              aria-label="increase quantity"
              onClick={() => onUpdate(food, offsetFoodQuantity(food, 1))}
            >
              <PlusIcon />
            </IconButton>
          </Tooltip>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => onRemove(food)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);
