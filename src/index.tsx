import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { theme } from "./fixtures/theme";

ReactDOM.render(
  <React.StrictMode>
    <App theme={theme} />
  </React.StrictMode>,
  document.getElementById("root")
);
