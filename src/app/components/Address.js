import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Address extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <main>
                    <section>
                        <p>
                            <span>Street: </span>
                            <span>{this.props.address.street}</span>    

                       </p>
                       <p>
                            <span>City: </span>
                            <span>{this.props.address.city}</span>    

                       </p>

                       <p>
                            <span>State: </span>
                            <span>{this.props.address.state}</span>    

                       </p>

                       <p>
                            <span>Phone No: </span>
                            <span>{this.props.address.phone}</span>    

                       </p>     
                    </section>
                </main>
            </div>
        )

    }
}
