import React, { Component } from 'react';
import Tickers from './component/Tickers.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <h2>mytestapp</h2>
      </div>
      </div>,<Tickers/>
    );
  }
}

export default App;
