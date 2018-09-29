import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import GameActions from './GameActions';
import TournamentList from './TournamentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/css/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    render() {
        let { players, tournament } = this.props;
        let playIcon = <FontAwesomeIcon icon="play" />
        let plusIcon = <FontAwesomeIcon icon="plus" />
        return (
            <main className="main-content">
                <TournamentList players={players} tournament={tournament}/>
                <GameActions onClick={ this.handleClick } players={ players } currentBracket={ tournament.currentBracket } />
            </main>
        )
    }
}

export default Home;