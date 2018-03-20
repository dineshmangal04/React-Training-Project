import React, {Component} from "react";

export default class Team extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {

        let team = this.props.team || [];
        let status = this.props.status;
        let error = this.props.error;

         if(status) {
             return (
             <div>
                <h2> loading.. </h2>
                <img src="/assets/loading.gif" />
            </div>
             )
         }   
        return (
            <div> 
            <h2>Team members</h2>
            
            <section className="flex three center teamlist">
                
                {
                    team.map( member => ( 

                        <div key={member.id}>
                            <img src={member.photo} className="img_responsive"/>
                            <p>{member.name}</p>
                            <p>{member.desc}</p>
                        </div>

                       
                    ))
                }
            </section>

            </div>
        )
    }

}