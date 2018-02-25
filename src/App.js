import React, { Component } from 'react';
import Tickers from './component/Tickers.js';
import Reactform from './component/Reactform.js';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './component/MapContainer.js';
import CommentListContainer from './component/CommentListContainer.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
  super(props);
//  alert(JSON.stringify(props));



  }
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
      <Reactform/>
    <MapContainer google={this.props.google} /><MapContainer google={this.props.google} />
    <CommentListContainer/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDrlh2mTuzgWFg3a_rSr1RWcI_BXZ7Qp-A',
})(App);
