import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TournamentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { players, tournament } = this.props;
        return (
            Object.values(tournament.currentBracket.matches).length ? 
            <section className="bracketbox light-text">
                <h2>Matches</h2>
                { tournament.currentBracket.byes.length ? (
                <aside className="infobox">
                <div className="icon-container">
                    <FontAwesomeIcon icon="info-circle" className=""/>
                </div>
                <div className="text-container">
                    <p>Because you entered an odd number of players, not everyone gets to play in this bracket.</p>
                </div>
                </aside>
                ) : null }
                { Object.values(tournament.currentBracket.matches).map(match => {
                    return (
                        <div key={match.matchId} className="matchbox">
                            <div className="playerbox lightblue-bg dark-text">{ players[match.player1.id].name }</div>
                            <div className="playerbox lightblue-bg dark-text">{ players[match.player2.id].name }</div>
                        </div>
                    )
                }) }
            </section> : null
        )
    }
}

export default TournamentList;