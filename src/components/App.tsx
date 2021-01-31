import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "../Theme";
import { MuiThemeProvider, Typography } from "@material-ui/core";

export type AppProps = {
  theme: Theme;
};

export const App = ({ theme }: AppProps) => (
  <StyledThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <Typography>Nutrition Planner</Typography>
    </MuiThemeProvider>
  </StyledThemeProvider>
);
