import React, { Component } from 'react'

export default class LoginControl extends Component {

    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick(){
        this.setState({
            isLoggedIn: true
        })
    }
    handleLogoutClick(){
        this.setState({
            isLoggedIn: false
        })
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        }else{
            button = <LoginButton onClick={this.handleLoginClick}/>
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}  

class LoginButton extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

class LogoutButton extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
