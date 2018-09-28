import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TournamentList extends Component {
    constructor(props) {
        super(props);
        this.isWinner = this.isWinner.bind(this);
    }

    isWinner(matchId, playerNo) {
        if (this.props.tournament.currentBracket.matches[matchId][playerNo].score >= 21) {
            return true;
        } else {
            return false;
        }
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
                    <p>There's an odd number of players, so not everyone will play in this bracket.</p>
                </div>
                </aside>
                ) : null }
                { Object.values(tournament.currentBracket.matches).map(match => {
                    return (
                        <Link to={"/matches/" + match.matchId} key={match.matchId} >
                            <div id={"match-" + match.matchId} className="match">
                                <div className={"player" + (this.isWinner(match.matchId, "player1") ? " winner" : "")}><p>{ players[match.player1.id].name }</p></div>
                                <div className={"player" + (this.isWinner(match.matchId, "player2") ? " winner" : "")}><p>{ players[match.player2.id].name }</p></div>
                            </div>
                        </Link>
                    )
                }) }
            </section> : null
        )
    }
}

export default TournamentList;