import { render } from "@testing-library/react";
import { App } from "./App";
import { theme } from "../fixtures/theme";
import { swrConfig } from "../fixtures/swrConfig";

it("can render App without throwing immediately", () => {
  expect(() =>
    render(<App theme={theme} swrConfig={swrConfig} search={empty} />)
  ).not.toThrow();
});

const empty = async () => [];
