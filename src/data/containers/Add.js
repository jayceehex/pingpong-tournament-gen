import { connect } from "react-redux";
import Add from '../components/Add';
import { setName } from '../actions/state';

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (name) => dispatch(setName(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);