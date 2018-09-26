import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class TournamentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { players, tournament } = this.props;
        return (
            <Fragment>
                { Object.values(tournament.currentBracket.matches).map(match => {
                    return (
                        <div key={match.matchId}>
                            <div>{ players[match.player1.id].name }</div>
                            <div>{ players[match.player2.id].name }</div>
                        </div>
                    )
                }) }
            </Fragment>
        )
    }
}

export default TournamentList;