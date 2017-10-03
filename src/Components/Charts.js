import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


class Charts extends Component {
    constructor() {
      super();
      this.state = {
        checked1: true,
        checked2: true, 
        checked3: true,
        checked4: true
      };

      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
  }

    handleChange1() {
    this.setState({
        checked1: !this.state.checked1      
    });
  }

    handleChange2() {
    this.setState({
        checked2: !this.state.checked2      
    });
  }

    handleChange3() {
    this.setState({
        checked3: !this.state.checked3      
    });
  }

    handleChange4() {
    this.setState({
        checked4: !this.state.checked4     
    });
  }

   render() {
    let togglecheck1 = this.state.checked1 ? 'angular' : '';
    let togglecheck2 = this.state.checked2 ? 'meteor' : '';
    let togglecheck3 = this.state.checked3 ? 'react' : '';
    let togglecheck4 = this.state.checked4 ? 'vue' : '';
      return (
        <div className="Linecharts">
      <LineChart width={600} height={300} data={this.props.info}
       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="date" height={60}/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend onClick={this.selectLine}/>
       <Line type="monotone" dataKey={togglecheck1} stroke="#8884d8" />
       <Line type="monotone" dataKey={togglecheck2} stroke="#009933" />
       <Line type="monotone" dataKey={togglecheck3} stroke="#ff0000" />
       <Line type="monotone" dataKey={togglecheck4} stroke="#cc0099" />
       </LineChart>
               <div className="Checkboxes">
                  <label>Angular</label>
                  <input type="checkbox" id="chk1" checked={ this.state.checked1 } onChange={ this.handleChange1 } />
                  <label>Meteor</label>
                  <input type="checkbox" id="chk2" checked={ this.state.checked2 } onChange={ this.handleChange2 } />
                  <label>React</label>
                  <input type="checkbox" id="chk3" checked={ this.state.checked3 } onChange={ this.handleChange3 } />
                  <label>Vue</label>
                  <input type="checkbox" id="chk4" checked={ this.state.checked4 } onChange={ this.handleChange4 } />
              </div>
      </div>
      );
    }
}




export default Charts;
