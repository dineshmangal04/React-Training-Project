import React, {Component} from "react";
import PropTypes from "prop-types";
import CompanyProfile from "./CompanyProfile";
import Team from "./Team";
export default class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTeam();
    }

    render() {
        console.log("render about component");
        return (
            <div>
               <CompanyProfile></CompanyProfile> 
               <Team team={this.props.team}></Team>  
            </div>
        )
    }
}