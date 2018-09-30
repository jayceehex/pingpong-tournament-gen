import { createStore, compose } from "redux";
import reducer from "./reducer";

const initial = {
    players: {},
    tournament: {
        noOfPlaces: 1,
        noOfBrackets: 0,
        currentBracket: {
            bracketId: 0,
            playerIds: [],
            noOfMatches: 0,
            matches: {},
            byes: {}
        },
        pastBrackets: {}
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initial,
    composeEnhancers()
  );

export default store;