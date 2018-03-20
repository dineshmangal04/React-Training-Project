import * as ActionTypes from "./action-types";
import * as service from "./service"
export function initTeam(team){
    return {
        type: ActionTypes.INIT_TEAM,
        payload: {
            team: team
        }
    }
}


export function loading(status){
    return {
        type: ActionTypes.LOADING,
        payload: {
            status: status
        }
    }
}
//return action as object.

export function initError(error) {
    return {
        type: ActionTypes.ERROR,
        payload: {
            error: error
        }
    }
}

//ASYNC Calls, actions
// as per thunk, returns action as function
export function fetchTeam() {
    // called by thunk
    return function(dispatch ){
        console.log("Called by thunk");
        //ajax call
        // fetch(...).then((products) => dispatch(products));
        dispatch(loading(true));
        service.getTeam()
        .then (team => { 
            console.log(team)
            let action = initTeam(team);
            //action object
            dispatch(action);
            dispatch(loading(false));
        })
    }
}