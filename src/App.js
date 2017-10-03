import React, { Component } from 'react';
import Charts from './Components/Charts';
import Search from './Components/Search';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor() {
      super();
      this.state = {
          chart: []
      };
  }

  getData() {
    return axios.get('http://localhost:3000/data.json');
  }


  componentDidMount() {
    this.getData().then(function(response) {
      let { data } = response;
      this.setState({
      chart: data
      });
      this.fullData = data;
      }.bind(this));
  }

  updateFilters(data) {
    let chart = this.fullData.filter(date => data.dates.indexOf(date.date) !== -1);
    this.setState({
        chart: chart
    });
  }


  render() {
    return (
        <div className="App">
        <div className="App-header">
          <h2>Welcome to trends</h2>
        </div>
          <div>
              <Charts info={this.state.chart} />
              <Search updateFilters={this.updateFilters.bind(this)} />
          </div>
      </div>
    );
  }
}

export default App;
