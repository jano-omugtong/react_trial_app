import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bulma/css/bulma.css";
import "@creativebulma/bulma-tooltip/dist/bulma-tooltip.min.css";
import "@creativebulma/bulma-badge/dist/bulma-badge.min.css";
import axios from "axios";

axios.defaults.withCredentials = true;

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
