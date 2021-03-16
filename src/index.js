import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Store/Store";

ReactDOM.render(
  <Router>
    <StoreProvider>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById("root")
);
