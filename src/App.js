import React, { Component } from 'react';
import Charts from './Components/Charts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Trends</h2>
        </div>
        <p className="App-intro">
          <Charts />
        </p>
      </div>
    );
  }
}

export default App;
