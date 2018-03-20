import * as ActionTypes from './action-types';

const INITIAL_STATE = {
    team: [],
    status: false,
    error: undefined
}

export default function teamReducer(state = INITIAL_STATE, action) {
    console.log("teamReducer ", state, action);
    switch(action.type) {
        case ActionTypes.INIT_TEAM:
            return Object.assign({}, state, {team: action.payload.team});

        case ActionTypes.LOADING:
            return Object.assign({}, state, {status: action.payload.status});

        case ActionTypes.ERROR:
            return Object.assign({}, state, {error: action.payload.error});

        default:
            return state;
    }
}