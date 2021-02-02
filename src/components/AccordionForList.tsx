import styled from "styled-components";
import { Accordion } from "@material-ui/core";

/**
 * An Accordion specifically adjusted to present well with a List inside of it
 */
export const AccordionForList = styled(Accordion)`
  // Disable expansion offset (I dislike it)
  &.MuiAccordion-root.Mui-expanded {
    margin: 0;
  }
  // Disable single pixel offset (I dislike it)
  &:before {
    display: none;
  }
  // Remove excessive padding caused by composing lists and accordions
  .MuiAccordionDetails-root {
    padding-top: 0;
  }
  .MuiListItem-container:first-child .MuiListItem-root {
    padding-top: 0;
  }
  .MuiList-root {
    padding: 0;
    width: 100%; // Fill the width of the accordion
  }
`;
