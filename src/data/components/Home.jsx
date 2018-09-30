import React, { Component } from 'react';
import GameActions from './GameActions';
import PlayerList from './PlayerList';
import TournamentList from './TournamentList';
import '../../styles/css/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unplayedMatches: Object.values(this.props.tournament.currentBracket.matches).filter(match => (match.player1.score < 21) && (match.player2.score < 21)).length,
        }
        this.handleStart = this.handleStart.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleStart() {
        this.props.onStart();
    }

    handleReset() {
        this.props.onReset();
    }

    render() {
        let { players, tournament } = this.props;
        return (
            <main className="main-content">
                {tournament.currentBracket.bracketId ? (
                    <TournamentList players={players} tournament={tournament}/>
                ) : (
                    Object.values(players).length ? <PlayerList players={players} tournament={tournament}/> : null
                )}
                <GameActions onStart={ this.handleStart } onReset={ this.handleReset } currentBracket={tournament.currentBracket} players={players} />
            </main>
        )
    }
}

export default Home;