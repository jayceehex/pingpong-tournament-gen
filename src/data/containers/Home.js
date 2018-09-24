import { connect } from "react-redux";
import Home from '../components/Home';
import { setTournament } from '../actions/state';

const mapStateToProps = (state) => {
    return {
        players: state.players,
        tournament: state.tournament
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(setTournament())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);