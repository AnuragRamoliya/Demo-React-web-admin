
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Material Dashboard 2 React Context Provider
import AllContext from "context/index";

ReactDOM.render(
  <React.StrictMode>
    <AllContext>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </AllContext>
  </React.StrictMode>,
  document.getElementById("root")
);

