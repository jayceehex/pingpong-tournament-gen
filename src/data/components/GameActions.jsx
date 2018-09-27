import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GameActions = ({onClick}) => {
    let playIcon = <FontAwesomeIcon icon="play" />
    let plusIcon = <FontAwesomeIcon icon="plus" />
    return (
        <div className="button-container">
            <Link className="standard-button" to="/add"><span>Add Players</span>{ plusIcon }</Link>
            <button className="highlight-button" onClick={ onClick }><span>Let's Play!</span>{ playIcon }</button>
        </div>
    )
};

export default GameActions;