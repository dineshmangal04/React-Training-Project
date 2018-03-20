import {createStore, combineReducers,
                    applyMiddleware} from 'redux';
//import counterReducer from './state/counterReducer';

import teamReducer from './about/state/teamReducer';
import StateListReducer from './states/state/StateListReducer';
import StateViewReducer from './states/state/StateViewReducer';
import StateEditReducer from './states/state/StateEditReducer';


import thunk from 'redux-thunk';
// writing small middleware
// function is called by store for every dispatch'

function loggerMiddleware(store) {
    return function(next) {
        return function(action) {
            console.log("LOGGER", action, typeof action);
            //forward action to next middleware or reducers
            let result = next(action);
            return result;
        }
    }
}

const rootReducers = combineReducers({
    //state name: reducer function
    //counter: counterReducer,
   teamState: teamReducer,
   stateState: StateListReducer,
   stateViewState: StateViewReducer,
   stateEditState: StateEditReducer

})
let store = createStore(rootReducers, applyMiddleware(loggerMiddleware, thunk));

export default store;
