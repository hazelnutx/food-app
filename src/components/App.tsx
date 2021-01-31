import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "../Theme";
import { MuiThemeProvider } from "@material-ui/core";
import { FoodList } from "./FoodList";
import { SearchTextField } from "./SearchTextField";
import { NutrientList } from "./NutrientList";
import { EditPlan } from "./EditPlan";

export type AppProps = {
  theme: Theme;
};

/**
 * The root of the react application.
 */
export const App = ({ theme }: AppProps) => (
  <StyledThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <SearchTextField>{() => <FoodList variant="add" />}</SearchTextField>
      <FoodList />
      <NutrientList />
      <EditPlan />
    </MuiThemeProvider>
  </StyledThemeProvider>
);
