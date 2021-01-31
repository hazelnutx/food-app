import styled from "styled-components";
import { Container as MuiContainer } from "@material-ui/core";

/**
 * The root visual component of the app.
 * Responsible for controlling sizing, padding and margin, responsive to the device.
 */
export const Container = styled(MuiContainer)`
  padding: 24px;
`;
