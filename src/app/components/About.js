import React, {Component} from "react";
import PropTypes from "prop-types";
import CompanyProfile from "./CompanyProfile";
import Team from "./Team";
export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
               <CompanyProfile></CompanyProfile> 
               <Team></Team>  
            </main>
        )
    }
}