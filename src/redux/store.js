import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";

// it is a middleware
const ReduxLogger = (store) => (next) => (action) => {
  console.log("Action : ", action);
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(ReduxLogger));
// const store = createStore(rootReducer, applyMiddleware(ReduxLogger));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;
