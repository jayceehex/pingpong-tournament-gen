import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import PlayerList from './PlayerList';

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
                <PlayerList players={players} tournament={tournament}/>
                <Link to="/add">Add</Link>
                <button onClick={ this.handleClick }>Generate</button>
            </Fragment>
        )
    }
}

export default Home;