
import {connect} from "react-redux";
 
import StateList from "../StateList";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
         statelist: state.stateState.statelist,
         status: state.teamState.status, //loading
         error: state.teamState.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       fetchStateList: function() {
            let actionFn = actions.fetchStateList();
            dispatch(actionFn);

       }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateList)