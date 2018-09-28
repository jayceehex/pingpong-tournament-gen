import { connect } from "react-redux";
import Match from '../components/Match';
import { setScores } from '../actions/state';

const mapStateToProps = (state, {id}) => {
    return {
        matchId: id,
        players: state.players,
        currentBracket: state.tournament.currentBracket,
        matches: state.tournament.currentBracket.matches
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id, scores) => dispatch(setScores(id, scores)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Match);