import "../scss/base.scss";
import ReactDOM from "react-dom";
import React from "react";
import Root from "~/containers/Root";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/configreStore";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
