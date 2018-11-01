import "../scss/base.scss";
import ReactDOM from "react-dom";
import React from "react";
import Root from "~/containers/Root";
import { Provider } from "react-redux";
import store from "./store/configreStore";

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app")
);
