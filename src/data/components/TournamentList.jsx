import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class TournamentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { players, tournament } = this.props;
        return (
            Object.values(tournament.currentBracket.matches).length ? 
            <div className="bracketbox">
                { Object.values(tournament.currentBracket.matches).map(match => {
                    return (
                        <div key={match.matchId} className="matchbox">
                            <div className="playerbox">{ players[match.player1.id].name }</div>
                            <div className="playerbox">{ players[match.player2.id].name }</div>
                        </div>
                    )
                }) }
                <div className="playerbox">
                    <p>{ tournament.currentBracket.byes.length ? tournament.currentBracket.byes.map(playerId => players[tournament.currentBracket.byes].name) : null }</p>
                </div>
            </div> : null
        )
    }
}

export default TournamentList;