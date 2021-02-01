import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "../Theme";
import { MuiThemeProvider } from "@material-ui/core";
import { SearchInput, SearchInputProps } from "./SearchInput";
import { NutrientList } from "./NutrientList";
import { EditPlan } from "./EditPlan";
import { Container } from "./Container";
import { SearchResults } from "./SearchResults";
import { useUniqueContainer } from "../hooks/useUniqueContainer";
import { isFoodEqual } from "../functions/isFoodEqual";
import { MyFoodList } from "./MyFoodList";

export type AppProps = {
  theme: Theme;
  search: SearchInputProps["search"];
};

/**
 * The root of the react application.
 */
export const App = ({ theme, search }: AppProps) => {
  const [myFood, addFood, removeFood] = useUniqueContainer([], isFoodEqual);
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
          <MyFoodList items={myFood} onRemove={removeFood} />
          <NutrientList />
          <EditPlan />
        </Container>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
};
