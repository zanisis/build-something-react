import React, { Component } from 'react';
// import {connect} from 'react-redux'
import {BrowserRouter, Route,} from 'react-router-dom'


// import Header from './components/Header'
import Main from './components/Main'
import MyTrack from './components/MyTrack'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path={"/"} component={Main}/>
          <Route path={"/mytrack"} component={MyTrack}/>
          {/* <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
