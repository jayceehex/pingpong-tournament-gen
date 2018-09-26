function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action)
      } else {
        return state
      }
    }
}

const setPlayerName = (state, name) => {
    // Create copy of state and add player
    let newState = {
        ...state,
        players: {
            ...state.players,
            [Object.values(state.players).length + 1]: {
                playerId: Object.values(state.players).length + 1,
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

const setMatches = state => {
    // Calculate no. of matches in current bracket
    let noOfMatches = Math.floor(state.tournament.currentBracket.playerIds.length / 2);
    // Copy state and set no. of matches
    let newState = {
        ...state,
        tournament: {
            ...state.tournament,
            currentBracket: {
                ...state.tournament.currentBracket,
                noOfMatches: noOfMatches,
            }
        }
    }
    return newState;
}

const setPlayersInBracket = state => {
    // Copy state and set player IDs in bracket
    let newState = {
        ...state,
        tournament: {
            ...state.tournament,
            currentBracket: {
                ...state.tournament.currentBracket,
                playerIds: [
                    ...Object.keys(state.players)
                ]
            }
        }
    }
    return newState;
}

const setPlayerMatches = state => {
    // Shuffle players into array
    let shuffledPlayers = shufflePlayers(state);
    // Create array of length = noOfMatches
    let matchesForPlayers = shuffledPlayers.slice(0, state.tournament.currentBracket.noOfMatches);
    // Create object of match objects
    let matches = matchesForPlayers.reduce((acc, cur, idx) => {
        return {
            ...acc,
            [idx + 1]: {
                matchId: idx + 1,
                player1: {
                    id: shuffledPlayers.length ? shuffledPlayers.pop().playerId : null,
                    score: null,
                },
                player2: {
                    id: shuffledPlayers.length ? shuffledPlayers.pop().playerId : null,
                    score: null,
                },
            }
        }
    }, {})
    // Insert object into state
    let newState = {
        ...state,
        tournament: {
            ...state.tournament,
            currentBracket: {
                ...state.tournament.currentBracket,
                matches: matches
            }
        }
    }
    return newState;
}

// const bracketReducer = createReducer([], {
//     'calculatePlayers': setPlayersInBracket,
//     'calculateMatches': setMatches
// })

const setTournamentStructure = state => {
    // Create copy of state, setting bracket to 1
    let newState = {
        ...state,
        tournament: {
            ...state.tournament,
            currentBracket: {
                ...state.tournament.currentBracket,
                bracketId: 1,
            }
        }
    }
    // Calculate minimum no. of places and brackets for no. of players
    while (newState.tournament.noOfPlaces < Object.values(state.players).length) {
        newState.tournament.noOfPlaces = newState.tournament.noOfPlaces * 2;
        newState.tournament.noOfBrackets = newState.tournament.noOfBrackets + 1;
    }
    // Set players in bracket
    let newStateWithPlayers = setPlayersInBracket(newState);
    // Calculate no. of matches in bracket
    let newStateWithMatches = setMatches(newStateWithPlayers);
    let newStateWithPlayerMatches = setPlayerMatches(newStateWithMatches);
    // Set new state
    return newStateWithPlayerMatches;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setTournament': return setTournamentStructure(state);
        case 'setName': return setPlayerName(state, action.name);
        default: return state;
    }
};

export default reducer;