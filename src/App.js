import React, { Component } from 'react';
import CleanWhite from './components/CleanWhite/CleanWhite'
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <CleanWhite logo={logo} />
      </div>
    );
  }
}

export default App;
