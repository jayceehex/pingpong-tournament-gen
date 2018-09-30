import { connect } from "react-redux";
import Home from '../components/Home';
import { setTournament, resetTournament } from '../actions/state';

const mapStateToProps = (state) => {
    return {
        players: state.players,
        tournament: state.tournament
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onStart: () => dispatch(setTournament()),
        onReset: () => dispatch(resetTournament())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);