import React, { Component } from 'react';
import './App.css';
import Test from './Test';

function App() {
  return (
    <div className="App">
      <Test></Test>
      <Author authorname="Charith Abeygunawardhana - Virtusa"></Author>
    </div>
  );
}
class Author extends Component{
  render(){
    return(
    <div>
      <h1>{this.props.authorname}</h1>
      <button className="btn btn-primary">Btn</button>
    </div>
    );
  }
}
export default App;
