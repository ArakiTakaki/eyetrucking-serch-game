import { createStore } from "redux";
// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
// import rootSaga from "./sagas";
import initialState from "./state";

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);
const store = createStore(reducers, initialState);

export default store;
