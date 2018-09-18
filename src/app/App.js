import React, { Component } from 'react';
import {Input} from './Input';
import './App.css';
import Router from './Router';


class App extends Component {
  render() {
    return (
      <div className='App'>
       <h1>Tell us your secrets</h1>
          <Input/>
          <Router/>
      </div>
    );
  }
}

export default App;
