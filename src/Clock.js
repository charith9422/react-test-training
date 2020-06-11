import React, { Component } from 'react'

// geting date to child component
function FormattedDate(props) {
    return <h2>Time is {props.date.toLocaleTimeString()} triggered by FormattedDate</h2>
}

class FormattedDateClass extends Component {
    
    render() {
        return (
            <div>
                <h3>Using class,time is {this.props.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}

export default class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }
    //runs after the component output has been rendered to the DOM. This is a good place to set up a timer
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 1000
        )
    }
    componentWillMount() {
        clearInterval(this.timerId);
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div>
                <h1>Local time is {this.state.date.toLocaleTimeString()}</h1>
                <FormattedDate date={this.state.date} />
                <FormattedDateClass date={this.state.date} />
            </div>
        )
    }
}
