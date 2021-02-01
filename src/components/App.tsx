import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "../Theme";
import {
  List,
  ListItem,
  ListItemText,
  MuiThemeProvider,
} from "@material-ui/core";
import { SearchInput, SearchInputProps } from "./SearchInput";
import { NutrientList } from "./NutrientList";
import { EditPlan } from "./EditPlan";
import { Container } from "./Container";
import { SearchResults } from "./SearchResults";
import { useState } from "react";
import { Food } from "../state/Food";

export type AppProps = {
  theme: Theme;
  search: SearchInputProps["search"];
};

/**
 * The root of the react application.
 */
export const App = ({ theme, search }: AppProps) => {
  const [myFood, setMyFood] = useState<Food[]>([]);
  const addFood = (food: Food) => setMyFood([...myFood, food]);
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
            {myFood.map(({ name }, index) => (
              <ListItem key={index}>
                <ListItemText primary={name} />
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
