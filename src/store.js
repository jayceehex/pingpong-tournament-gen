import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";

const initial = {
    players: {}
};

const store = createStore(
    reducer,
    initial
  );

export default store;