const setPlayerName = (state, name) => {
    let newState = {
        ...state,
        players: {
            ...state.players,
            [Object.values(state.players).length + 1]: {
                tournamentId: Object.values(state.players).length + 1,
                name: name,
                wins: 0
            }
        }
    };
    'use strict';
    let shuffle = require('knuth-shuffle').knuthShuffle;
    let shuffledPlayers = shuffle(Object.values(newState.players).slice(0));
    console.log(shuffledPlayers);
    return newState;
}

const setTournamentStructure = (state) => {
    let newState = {
        ...state,
        tournament: {
            ...state.tournament,
        }
    }
    while (newState.tournament.noOfPlaces < Object.values(state.players).length) {
        newState.tournament.noOfPlaces = newState.tournament.noOfPlaces * 2;
        newState.tournament.noOfBrackets = newState.tournament.noOfBrackets + 1;
    }
    return newState;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setTournament': return setTournamentStructure(state);
        case 'setName': return setPlayerName(state, action.name);
        default: return state;
    }
};

export default reducer;