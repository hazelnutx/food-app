import { render } from "@testing-library/react";
import { App } from "./App";
import { theme } from "../fixtures/theme";

it("can render App without throwing immediately", () => {
  expect(() => render(<App theme={theme} />)).not.toThrow();
});
