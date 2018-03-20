
import {connect} from "react-redux";
 
import About from "../About";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
         team: state.teamState.team,
         status: state.teamState.status, //loading
         error: state.teamState.error,

         //other states
         counter: state.counter
         
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       fetchTeam: function() {
            let actionFn = actions.fetchTeam();
            dispatch(actionFn);

       }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (About)