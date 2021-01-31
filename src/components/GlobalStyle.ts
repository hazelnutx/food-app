import { createGlobalStyle } from "styled-components";

/**
 * Global styles, settings default colors, resetting page padding/margins.
 * Should only be rendered once.
 */
export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }
  body {
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
