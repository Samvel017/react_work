import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import JsonParse from './Components/JsonParse';
import Main from './Components/Main/Main';

export default class App extends Component {
  state = {
    json: JsonParse,
  };
  render() {
    console.log(this.state.json);
    return (
      <div className='app'>
        <Header json={this.state.json} />
        <Main json={this.state.json}/>
      </div>
    );
  }
}
