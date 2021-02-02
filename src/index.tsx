import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { theme } from "./fixtures/theme";
import { searchForFoods } from "./api/custom/searchForFoods";
import { swrConfig } from "./fixtures/swrConfig";

ReactDOM.render(
  <React.StrictMode>
    <App theme={theme} swrConfig={swrConfig} search={searchForFoods} />
  </React.StrictMode>,
  document.getElementById("root")
);
