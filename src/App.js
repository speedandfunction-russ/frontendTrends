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
      function createArray(data) {
        let midresult = [];
        let datesList = Array.from(new Set(data.map(a => a.date))); //create the list of dates, remove the duplicates
        function createObj(data, i) { //declaring the main function
          let result = data
          .filter(report => report.date == i) // filter the data by date criteria (i)
          .reduce((obj, item) => 
            Object.assign(obj, {date: item.date, [item.technology_id]: item.value}) ,{}); //create the new array with date: react: meteor: etc
            midresult.push(result);
        };
        for(let i=0; i < datesList.length; i++) { //repeat the main function for each date in list
          createObj(data, datesList[i]);
        };//loop
        let mid = midresult;
        function myFunc(data) {
          let final = [];
          function replaceKeys(item) {
            let replacements = {'1':'react', '2':'angular', '3':'meteor'};
            let replacedItems = Object.keys(item).map((key) => {
            let newKey = replacements[key] || key;
            return { [newKey] : item[key] };
            });
            let newTab = replacedItems.reduce((a, b) => Object.assign({}, a, b));
            final.push(newTab)
          };
          for (let i = 0; i < data.length; i++) {
            replaceKeys(data[i]);
          };
          return (final);
        };
        return (myFunc(mid));
      };//createArray
      let data = createArray(response.data);
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
