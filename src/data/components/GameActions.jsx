import React from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/css/GameActions.css';

const GameActions = ({onClick, players, currentBracket}) => {
    let unplayedMatches = Object.values(currentBracket.matches).filter(match => (match.player1.score < 21) && (match.player2.score < 21))
    let playIcon = <FontAwesomeIcon icon="play" />
    let plusIcon = <FontAwesomeIcon icon="plus" />
    return (
        <div className="button-container">
            <Link className="standard-button" to="/add"><span>Add Players</span>{ plusIcon }</Link>
            <Button id="start-tournament-button" onClick={onClick} isDisabled={false} type="highlight"><span>Play</span>{ playIcon }</Button>
        </div>
    )
};

export default GameActions;