import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";

export type NutrientListItemProps = {
  name: string;
  value: string;
};

export const NutrientListItem = ({ name, value }: NutrientListItemProps) => (
  <ListItem>
    <ListItemText primary={name} />
    <ListItemSecondaryAction>
      <Typography>{value}</Typography>
    </ListItemSecondaryAction>
  </ListItem>
);
