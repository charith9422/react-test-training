import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "Header from state!...",
            content: "Content from state"
          // constructor is better place to set state and binding event handler methods
          // do not directly update state.use set state method 
          // can use both state and props in same application
          // props are the only way that react with their children  
        }
    }

    render() {
        return (
            <div>
                {/* <h1>{this.state.header}</h1> */}
                <Header headerProp={this.state.header}></Header>
                <h2>{this.state.content}</h2>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>    
            </div>
        )
    }
}

