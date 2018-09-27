import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import TournamentList from './TournamentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <Fragment>
                <TournamentList players={players} tournament={tournament}/>
                <div className="button-container">
                    <Link className="standard-button" to="/add">Add { plusIcon }</Link>
                    <button className="highlight-button" onClick={ this.handleClick }>Generate { playIcon }</button>
                </div>
            </Fragment>
        )
    }
}

export default Home;