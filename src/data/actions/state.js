export const setBracketResult = () => {
    return {
        type: 'setBracketResult'
    }
}

export const setScores = (id, scores) => {
    return {
        type: 'setScores',
        matchId: id,
        p1Score: scores.p1ScoreInput,
        p2Score: scores.p2ScoreInput,
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

export const resetTournament = () => {
    return {
        type: 'resetTournament'
    }
}