import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { CryptoProvider } from "./Context/CryptoContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <CryptoProvider>
      <App />
    </CryptoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
