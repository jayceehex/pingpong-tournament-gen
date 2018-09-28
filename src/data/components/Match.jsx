import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import FourOhFour from './FourOhFour';
import IconButton from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p1ScoreInput: 0,
            p2ScoreInput: 0,
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        switch(e.target.id) {
            case 'p1-score': {
                this.setState({
                    p1ScoreInput: e.target.value
                })
                break;
            };
            default: {
                this.setState({
                    p2ScoreInput: e.target.value
                })
            };
        }
    }

    onClick() {
        this.props.onClick(this.props.matchId, this.state)
    }

    render() {
        let { matchId, matches, players, currentBracket } = this.props;
        return (
            <Fragment>
                {
                    matches[matchId] !== undefined ? (
                        <Fragment>
                        <IconButton target="/" icon="back" />
                        <section id="player1">
                            <div className="player">
                                <p>{ players[matches[matchId].player1.id].name }</p>
                            </div>
                            <div className="form">
                                <label htmlFor="p1-score">Score</label>
                                <input id="p1-score" type="number" onChange={(e) => this.onChange(e)} value={this.state.p1ScoreInput} />
                            </div>
                        </section>
                        <section id="player2">
                            <div className="player">
                                <p>{ players[matches[matchId].player1.id].name }</p>
                            </div>
                            <div className="form">
                                <label htmlFor="p2-score">Score</label>
                                <input id="p2-score" type="number" onChange={(e) => this.onChange(e)} value={this.state.p2ScoreInput} />
                            </div>
                        </section>
                        <div className="button-container">
                            <button id="save-scores-button" onClick={this.onClick} className="highlight-button">Save Scores</button>
                        </div>
                        </Fragment>
                    ) : <FourOhFour />
                }
            </Fragment>
        )
    }
}

export default Match;