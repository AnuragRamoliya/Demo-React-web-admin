
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Material Dashboard 2 React Context Provider
import AllContext from "context/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AllContext>
          <App />
      </AllContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

