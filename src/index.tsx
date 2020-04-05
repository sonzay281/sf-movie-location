import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { init } from "@sentry/browser";

import store from "store";
import * as serviceWorker from "./serviceWorker";

import "assets/scss/styles.scss";
import ErrorBoundary from "views/ErrorBoundary";
import LandingPage from "views/LandingPage";

init({
  dsn: "https://a1453a9088b54430b1e720c5d247b6c9@sentry.io/5189353",
});
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <LandingPage />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
