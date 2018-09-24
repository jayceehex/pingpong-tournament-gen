const setPlayerName = (state, name) => {
    let newState = {
        ...state,
        players: {
            ...state.players,
            [Object.values(state.players).length + 1]: {
                name: name,
                wins: 0
            }
        }
    };
    return newState;
}


const setTournamentBrackets = (state) => {
    const calculateBrackets = (players) => {
        let brackets = 0;
        let slots = 1;
        while (slots < players) {
            slots * 2;
            brackets++;
        }
        return brackets;
    }
    let newState = {
        ...state,
        tournament: {
            ...state.tournament,
            numberOfBrackets: calculateBrackets(state.players)
        }
    }
    return newState;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setBrackets': return setTournamentBrackets(state);
        case 'setName': return setPlayerName(state, action.name);
        default: return state;
    }
};

export default reducer;