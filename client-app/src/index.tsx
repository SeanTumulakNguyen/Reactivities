import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./app/layout/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    {/* React.StrictMode> */}
    <ScrollToTop>
      <App />
    </ScrollToTop>
    {/* </React.StrictMode>, */}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
