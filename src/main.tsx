import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/style.scss";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);
