import "styled-components";
import { Theme } from "../Theme";

// Type augmentation to make styled-components use our applications Theme type

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
