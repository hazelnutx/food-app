import styled from "styled-components";
import { Accordion } from "@material-ui/core";

/**
 * An Accordion specifically adjusted to present well with a Table inside of it
 */
export const AccordionForTable = styled(Accordion)`
  // Disable expansion offset (I dislike it)
  &.MuiAccordion-root.Mui-expanded {
    margin: 0;
  }
  // Disable single pixel offset (I dislike it)
  &:before {
    display: none;
  }
  // Remove excessive padding caused by composing tables and accordions
  .MuiTableRow-root:first-child .MuiTableCell-root {
    padding-top: 0;
  }
  .MuiTableRow-root:last-child .MuiTableCell-root {
    border: 0;
  }
`;
