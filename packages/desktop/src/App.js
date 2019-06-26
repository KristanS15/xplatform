import React, { Component } from 'react';

// XPlatform
import { add } from "@xplatform/common/index";
import logo from '@xplatform/common/logo.svg';
import "@xplatform/common/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. { add(1, 4) }
        </p>
      </div>
    );
  }
}

export default App;
