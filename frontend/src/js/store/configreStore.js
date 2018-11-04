import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import initialState from "./state";
import logger from "redux-logger";
// import sagas from "./sagas";

const middlewares = [];

// redux-logger
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// redux-saga
// const sagaMiddleware = createSagaMiddleware();
// middlewares.push(sagaMiddleware);

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);
// sagaMiddleware.run(sagas);

export default store;
