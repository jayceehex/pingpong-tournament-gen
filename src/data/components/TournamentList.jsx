import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/css/TournamentList.css';

class TournamentList extends Component {
    constructor(props) {
        super(props);
        this.isWinner = this.isWinner.bind(this);
    }

    isWinner(matchId, playerNo) {
        if (this.props.tournament.currentBracket.matches[matchId][playerNo].score >= 21) {
            return " player--winner";
        } else if ((this.props.tournament.currentBracket.matches[matchId].player1.score < 21) && (this.props.tournament.currentBracket.matches[matchId].player2.score < 21)) {
            return "";
        } else {
            return " player--loser";
        }
    }

    render() {
        let { players, tournament } = this.props;
        return (
            Object.values(tournament.currentBracket.matches).length ? 
            <section className="bracketbox light-text">
                <h2>Bracket {tournament.currentBracket.bracketId}</h2>
                { tournament.currentBracket.byes.length ? (
                <aside className="infobox">
                <div className="infobox--icon-container">
                    <FontAwesomeIcon icon="info-circle" className=""/>
                </div>
                <div className="infobox--text-container">
                    <p>There's an odd number of players, so not everyone will play in this bracket.</p>
                </div>
                </aside>
                ) : null }
                { Object.values(tournament.currentBracket.matches).map(match => {
                    return (
                        <Link to={"/matches/" + match.matchId} key={match.matchId} style={{ textDecoration: 'none' }} >
                            <div id={"match-" + match.matchId} className="match">
                                <div className="playerbox">
                                    <div className={"player--head" + this.isWinner(match.matchId, "player1")}><p>{ players[match.player1.id].name }</p></div>
                                </div>
                                <div className="playerbox">
                                    <div className={"player--head" + this.isWinner(match.matchId, "player2")}><p>{ players[match.player2.id].name }</p></div>
                                </div>
                            </div>
                        </Link>
                    )
                }) }
            </section> : null
        )
    }
}

export default TournamentList;