import React, { Component } from "react";
import PropTypes from "prop-types";
import Address from './Address';

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    getOfficeAddress() {
        let officeAdd = {
            street: '3rdFloor Wing A, Indiqube Alpha Building',
            city: 'Bangalore',
            state: 'Karnataka',
            phone: '+ 91 080 4662 2200'
        }
        return officeAdd;
    }

    getBranchOffice() {
        let branchAdd = {
            street: '612 Park Centra , Sector 30',
            city: 'Gurgaon',
            state: 'Haryana',
            phone: '+91 (0124) 470 0200'
        }
        return branchAdd;
    }

    render() {

        return (
            <div>
                <main>
                    <section>
                        <h1>
                            Office Address:
                        </h1>    
                        <Address address={this.getOfficeAddress()}></Address>
                    </section>
                    <section>
                        <h1>
                            Branch Address:
                        </h1>    
                        <Address address={this.getBranchOffice()}></Address>
                    </section>
               </main> 
            </div>
        )
    }
}