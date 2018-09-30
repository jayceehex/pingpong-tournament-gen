import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/css/GameActions.css';

const GameActions = ({onStart, onReset, currentBracket, players}) => {
    let playIcon = <FontAwesomeIcon icon="play" />
    let plusIcon = <FontAwesomeIcon icon="plus" />
    let resetIcon = <FontAwesomeIcon icon="sync-alt" />    
    return (
        <div className="button-container">
            {currentBracket.bracketId ? (
            <Button id="reset-tournament-button" onClick={onReset} type="standard"><span>Reset</span>{ resetIcon }</Button>
            ) : (
            <Fragment>
                <Link className="standard-button" to="/add"><span>Add Players</span>{ plusIcon }</Link>
                {Object.values(players).length > 1 ? <Button id="start-tournament-button" onClick={onStart} isDisabled={ currentBracket.bracketId ? true : false } type="highlight"><span>Play</span>{ playIcon }</Button> : null}
            </Fragment>
            )}
        </div>
    )
};

export default GameActions;