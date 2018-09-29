import React, { Component } from 'react';
import PlayerList from './PlayerList';
import IconButton from './IconButton';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modified: false,
            inputValue: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.props.onClick(this.state.inputValue);
        this.setState({
            modified: false,
            inputValue: ""
        });
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            modified: true,
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
                        <Button id="add-players-button" onClick={this.handleClick} isDisabled={this.state.modified ? false : true} type="highlight">Add { plusIcon }</Button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Add;