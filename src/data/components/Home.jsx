import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import TournamentList from './TournamentList';

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
        return (
            <Fragment>
                <TournamentList players={players} tournament={tournament}/>
                <Link className="button" to="/add">Add</Link>
                <button className="button" onClick={ this.handleClick }>Generate</button>
            </Fragment>
        )
    }
}

export default Home;