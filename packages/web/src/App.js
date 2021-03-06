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
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React <p>{ add(1, 2) }</p>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
