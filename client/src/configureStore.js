import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduce from "./reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewares = [thunk];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default function configureStore() {
  const store = createStore(reduce, enhancer);
  return store;
}
