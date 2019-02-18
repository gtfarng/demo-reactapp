import React, { Component } from 'react';
import './App.css';
import Github from './Component/Github'
import Weather from './Component/Weather';
//import WeatherDemo from './Component/WeatherDemo';

export default class App extends Component {
  render() {

    return (
      <div className="contariner">

      <div className="App">
      <div className="App-header">
       <h1>My-ReactApp </h1>
      </div>
      <div className="App-header1">
      <Github />      
      </div>

      <div className="App-header">
      <Weather />     
      </div>

      </div>
      </div>
    );
  }
}

