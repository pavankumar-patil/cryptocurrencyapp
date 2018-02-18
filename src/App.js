import React, { Component } from 'react';
import Tickers from './component/Tickers.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {

    componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <h2>mytestapp</h2>
      </div>
      <Tickers/>
      </div>
    );
  }
}

export default App;
