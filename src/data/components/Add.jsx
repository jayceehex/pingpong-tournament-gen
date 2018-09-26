import React, { Component, Fragment } from 'react';
import PlayerList from './PlayerList';
import IconButton from './IconButton';


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.props.onClick(this.state.inputValue);
        this.setState({inputValue: ""});
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            inputValue: e.target.value,
        })
    }

    render() {
        let { players, tournament } = this.props;
        return (
            <Fragment>
                <PlayerList players={players} tournament={tournament}/>
                <div>
                    <label htmlFor="player-name">Player Name</label>
                    <input id="player-name" type="text" value={ this.state.inputValue } onChange={ (e) => this.handleChange(e) } />
                    <button onClick={ this.handleClick }>Add</button>
                </div>
                <IconButton target="/" />
            </Fragment>
        )
    }
}

export default Add;