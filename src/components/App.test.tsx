import { render } from "@testing-library/react";
import { App } from "./App";
import { theme } from "../fixtures/theme";

it("can render App without throwing immediately", () => {
  expect(() => render(<App theme={theme} search={search} />)).not.toThrow();
});

const search = async (query: string) =>
  [{ name: "foo" }, { name: "bar" }, { name: "baz" }].filter(
    (food) => food.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
