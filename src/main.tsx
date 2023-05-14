import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./assets/scss/style.scss";
import { apolloClient } from "./utils/apollo-client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <ApolloProvider client={apolloClient}>
          <App />
          <ToastContainer />
        </ApolloProvider>
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);
