import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const data = [
      {"name":"01.01.17","angular":4000,"react":2400,"meteor":2400},
      {"name":"02.01.17","angular":3000,"react":1398,"meteor":2210},
      {"name":"03.01.17","angular":2000,"react":9800,"meteor":2290},
];


class Charts extends Component {
   render() {
      return (
      <LineChart width={600} height={300} data={data}
       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="angular" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="react" stroke="#82ca9d" />
       <Line type="monotone" dataKey="meteor" stroke="#82ca9d" />
      </LineChart>
      );
    }
}




export default Charts;
