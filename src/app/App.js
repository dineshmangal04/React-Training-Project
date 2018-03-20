import React from 'react';

import Footer from "./components/Footer";

import Header from "./components/Header";

//import Home from "./components/Home";

//import About from "./components/About";

import PropTypes from 'prop-types';


//import Cart from "./cart/components/Cart";

export class App extends React.Component {
    
    // keyword
    // getChildContext() {
    //     return {
    //             color: this.props.color,
    //             name: "Product App"
    //         };
    // }

    componentDidMount() {
        console.log("App did mount");
    }
    
    // react keyword
    // create a virtual dom, returns v dom
    render() {
        console.log("App render")

        return (
            <div>
                <h1>Welcome To Xebia</h1>

                <Header title="React Training Project" states="/states"/>

                {/* children contains routes path */}
 
                <div>
                    {this.props.children}
                </div>

                {/* <Cart />

             
                <Home />

                <About /> */}
                

                 <Footer year={2018} company="Xebia" >
                    
                 </Footer>
            </div>
        )
    }

}

//keyword
// App.childContextTypes = {
//     color: PropTypes.string,
//     name: PropTypes.string
//   };