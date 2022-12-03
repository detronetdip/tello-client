import React from "react";
import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import App from "../src/App";
import { MemoryRouter as Router } from "react-router-dom";

test("Renders main page correctly", () => {
  render(
    <RecoilRoot>
      <Router>
        <App />
      </Router>
    </RecoilRoot>
  );
});
