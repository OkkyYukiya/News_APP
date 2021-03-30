import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./context/Store";
import { AuthProvider } from "./context/AuthProvider";

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
