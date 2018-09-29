import React, { Component, Fragment } from 'react';
import PlayerList from './PlayerList';
import IconButton from './IconButton';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/css/Add.css';

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
            <Fragment>
                <main className="main-content">
                    { Object.values(players).length ? (
                    <PlayerList players={players} tournament={tournament}/>
                    ) : null }
                    <div className="form">
                        <label htmlFor="player-name">Player Name</label>
                        <input id="player-name" type="text" value={ this.state.inputValue } onChange={ (e) => this.handleChange(e) } />
                        <div className="button-container">
                            <Button id="add-players-button" onClick={this.handleClick} isDisabled={this.state.modified ? false : true} type="highlight">Add { plusIcon }</Button>
                        </div>
                    </div>
                </main>
                <aside className="sidebar-1">
                    <div className="icon-button-container">
                        <IconButton target="/" icon="back" />
                    </div>
                </aside>
            </Fragment>
        )
    }
}

export default Add;