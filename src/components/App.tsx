import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Theme } from "../Theme";

export type AppProps = {
  theme: Theme;
};

export const App = ({ theme }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    Nutrition Planner
  </ThemeProvider>
);
