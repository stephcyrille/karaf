import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { ConnectedRouter } from "connected-react-router";

import "./index.css";

import App from "./App";

import { Provider } from "react-redux";
// Redux
import configureStore, { history } from "./stores/index";

//react-intl
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import fr from "react-intl/locale-data/fr";

addLocaleData([...en, ...fr]);
const store = configureStore();
window.dispatch = store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,

  document.getElementById("karaf-front-office")
);
