import React, { Component } from 'react';
import './App.css';
import LoginControl from './LoginControl';
import Toggle from './Toggle';
import PropsTest from './PropsTest';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <LoginControl />
      <Toggle />
      <Author authorname="Charith Abeygunawardhana - Virtusa"></Author>
      <Welcome name="Sara"/>
      <Welcome name="Lima"/>
      <Welcome name="Lora"/>
      <PropsTest />
      <Clock/>
    </div>
  );
}
class Author extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.authorname}</h1>
        <button className="btn btn-primary">Btn</button>
      </div>
    );
  }
}
function Welcome(props) {
  return <h2>Hello,{props.name}</h2>
}
export default App;
