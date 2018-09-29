import React, { Component, Fragment } from 'react';
import FourOhFour from './FourOhFour';
import IconButton from './IconButton';
import Button from './Button';

class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modified: false,
            p1ScoreInput: Object.values(this.props.currentBracket.matches).length ? this.props.currentBracket.matches[this.props.matchId].player1.score : 0,
            p2ScoreInput: Object.values(this.props.currentBracket.matches).length ? this.props.currentBracket.matches[this.props.matchId].player2.score : 0,
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        switch(e.target.id) {
            case 'p1-score':
                this.setState({
                    modified: true,
                    p1ScoreInput: e.target.value
                })
                break;
            default:
                this.setState({
                    modified: true,
                    p2ScoreInput: e.target.value
                })
        }
    }

    onClick() {
        this.props.onClick(this.props.matchId, this.state)
        this.setState({modified: false})
    }

    render() {
        let { matchId, matches, players, currentBracket } = this.props;
        return (
            <Fragment>
                {
                    matches[matchId] !== undefined ? (
                        <Fragment>
                        <IconButton target="/" icon="back" />
                        <section id="player1" className="playerbox">
                            <div className="player--head">
                                <p>{ players[matches[matchId].player1.id].name }</p>
                            </div>
                            <div className="player--info">
                                <label htmlFor="p1-score">Score</label>
                                <input id="p1-score" type="number" onChange={(e) => this.onChange(e)} value={this.state.p1ScoreInput} min="0" max="100" />
                            </div>
                        </section>
                        <section id="player2" className="playerbox">
                            <div className="player--head">
                                <p>{ players[matches[matchId].player2.id].name }</p>
                            </div>
                            <div className="player--info">
                                <label htmlFor="p2-score">Score</label>
                                <input id="p2-score" type="number" onChange={(e) => this.onChange(e)} value={this.state.p2ScoreInput} min="0" max="100" />
                            </div>
                        </section>
                        <div className="button-container">
                            <Button id="save-scores-button" onClick={this.onClick} isDisabled={this.state.modified ? false : true} type="highlight">Save Scores</Button>
                        </div>
                        </Fragment>
                    ) : <FourOhFour />
                }
            </Fragment>
        )
    }
}

export default Match;