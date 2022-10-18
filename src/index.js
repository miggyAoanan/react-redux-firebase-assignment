import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import rootReducer from "./redux/root-reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "./redux/logger";
import monitorReducerEnhancer from "./redux/monitorReducer";
const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

const store = createStore(rootReducer, composedEnhancers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
