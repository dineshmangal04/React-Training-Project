
import {connect} from "react-redux";
 
import StateView from "../StateView";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
        stateview: state.stateViewState.stateview,
         status: state.stateViewState.status, //loading
         error: state.stateViewState.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       fetchStateView: function(id) {
            let actionFn = actions.fetchStateView(id);
            dispatch(actionFn);

       }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateView)