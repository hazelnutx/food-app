import { Theme } from "../state/Theme";
import { createMuiTheme } from "@material-ui/core";

/**
 * The one and only material-ui and styled-components theme the application uses.
 */
export const theme: Theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
