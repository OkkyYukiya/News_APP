import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Store/Store";
import { AuthProvider } from "./Store/AuthProvider";

ReactDOM.render(
  <Router>
    <StoreProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StoreProvider>
  </Router>,
  document.getElementById("root")
);
