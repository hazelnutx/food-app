import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { theme } from "./fixtures/theme";
import { searchForFoods } from "./api/custom/searchForFoods";

ReactDOM.render(
  <React.StrictMode>
    <App theme={theme} search={searchForFoods} />
  </React.StrictMode>,
  document.getElementById("root")
);
