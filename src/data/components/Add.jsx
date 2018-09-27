import React, { Component } from 'react';
import PlayerList from './PlayerList';
import IconButton from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        let plusIcon = <FontAwesomeIcon icon="plus" />
        return (
            <section className="">
                <IconButton target="/" icon="back" />
                <PlayerList players={players} tournament={tournament}/>
                <div className="form">
                    <label htmlFor="player-name">Player Name</label>
                    <input id="player-name" type="text" value={ this.state.inputValue } onChange={ (e) => this.handleChange(e) } />
                    <div className="button-container">
                        <button onClick={ this.handleClick } className="highlight-button" disabled={ this.state.inputValue ? false : true }>Add { plusIcon }</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Add;