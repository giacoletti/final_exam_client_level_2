import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./app.css";
import configureStore from "./state/store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById("root")
);
