// route configuration


import React from "react";

import {
       BrowserRouter as Router,  
       Route, 
        Switch,
        } from "react-router-dom";

        
import {App} 
        from "./App";


import Home from "./components/Home";
import About from "./about/About";
import NotFound from "./components/NotFound";
import Contact from "./components/Contacts";
import StateList from "./states/containers/StateList";
import StateView from "./states/containers/StateView";
import StateEdit from "./states/containers/StateEdit";

//default import, alias by default;
//import ReduxHome from './containers/ReduxHome';
import TeamList from './about/containers/TeamList'; 


// functional component
export default function Routes(props) {
    return (
        <Router>
            <App  color='white'>
                <Switch>
                    <Route path="/" exact   component={Home} />
                    {/* <Route path="/redux-home" exact   component={ReduxHome} /> */}
                    {/* <Route path="/products" exact   component={ProductList} /> */}
                    <Route path="/about"   component={TeamList} />
                    <Route path="/contact"   component={Contact} />
                    <Route path="/states"   exact component={StateList} />
                    <Route path="/states/view/:id"   component={StateView} />
                    <Route path="/states/edit/:id"   component={StateEdit} />
                    
                    <Route path="*"   component={NotFound} />
                </Switch>

            </App>
        </Router>
    )
}
