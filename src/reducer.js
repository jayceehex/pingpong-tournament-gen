const setPlayerName = (state, name) => {
    // Create copy of state and add player
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
    // Return the new state
    return newState;
}

const shufflePlayers = (state) => {
    // Copy values of players object in state to array
    let players = Object.values(state.players).slice(0);
    // Shuffle players array using Fisher-Yates Shuffle
    let shuffle = require('knuth-shuffle').knuthShuffle;
    let shuffledPlayers = shuffle(players);
    // Return shuffled players array
    return shuffledPlayers;
}

const setTournamentStructure = state => {
    // Create copy of state
    let newState = {
        ...state,
        tournament: {
            ...state.tournament,
        }
    }
    // Calculate minimum no. of places and brackets for no. of players
    while (newState.tournament.noOfPlaces < Object.values(state.players).length) {
        newState.tournament.noOfPlaces = newState.tournament.noOfPlaces * 2;
        newState.tournament.noOfBrackets = newState.tournament.noOfBrackets + 1;
    }
    // Set new state
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