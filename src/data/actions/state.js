export const setBracketResult = () => {
    return {
        type: 'setBracketResult'
    }
}

export const setMatchResult = winner => {
    return {
        type: 'setMatchResult',
        winner: winner
    }
}

export const setName = name => {
    return {
        type: 'setName',
        name: name
    }
}

export const setTournament = () => {
    return {
        type: 'setTournament'
    }
}