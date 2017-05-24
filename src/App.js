import React, { Component } from 'react';
// import {connect} from 'react-redux'


import Header from './components/Header'
import Main from './components/Main'



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
