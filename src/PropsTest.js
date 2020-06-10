import React, { Component } from 'react'

export default class PropsTest extends Component {
    render() {
        return (
            <div>
                <Tick />
                <Comment date={comment.date} text={comment.text} author={comment.author} />

            </div>
        )
    }
}

function Tick() {
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );

}

setInterval(Tick, 1000);

function Comment(props) {
    return (
        <div className="Comment">
            <div className="DateInfo">
                <h3>{formatDate(props.date)}</h3>
            </div>
            <div className="TextInfo">
                <p>{props.text}</p>
            </div>
            <div className="userInfo">
                <h4>{props.author.name}</h4>
            </div>
        </div>
    );
}
function formatDate(date) {
    return date.toLocaleDateString();
}
const comment = {
    date: new Date(),
    text: 'This is for testing purposes only!',
    author: {
        name: 'Hello Boys'
    }
}