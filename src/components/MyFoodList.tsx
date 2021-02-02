import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { Food } from "../state/Food";
import { describeServing } from "../functions/describeServing";

export type MyFoodListProps = {
  items: Food[];
  onRemove: (item: Food) => void;
};

/**
 * Lists the foods the user has chosen to add to their diet
 */
export const MyFoodList = ({ items, onRemove }: MyFoodListProps) => (
  <List>
    {items.map((food, index) => (
      <ListItem key={index}>
        <ListItemText primary={food.name} secondary={describeServing(food)} />
        <ListItemSecondaryAction>
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
