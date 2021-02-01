import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "../Theme";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  MuiThemeProvider,
} from "@material-ui/core";
import { SearchInput, SearchInputProps } from "./SearchInput";
import { NutrientList } from "./NutrientList";
import { EditPlan } from "./EditPlan";
import { Container } from "./Container";
import { SearchResults } from "./SearchResults";
import { Food } from "../state/Food";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { useUniqueContainer } from "../hooks/useUniqueContainer";

export type AppProps = {
  theme: Theme;
  search: SearchInputProps["search"];
};

/**
 * The root of the react application.
 */
export const App = ({ theme, search }: AppProps) => {
  const [myFood, addFood, removeFood] = useUniqueContainer<Food>();
  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <SearchInput label="Enter food or brand" search={search}>
            {({ closePopper, clearInput, ...props }) => (
              <SearchResults
                {...props}
                searchingText="Searching..."
                emptyText="No results"
                onFoodSelected={(food) => {
                  addFood(food);
                  closePopper();
                  clearInput();
                }}
              />
            )}
          </SearchInput>
          <List>
            {myFood.map((food, index) => (
              <ListItem key={index}>
                <ListItemText primary={food.name} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeFood(food)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <NutrientList />
          <EditPlan />
        </Container>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
};
