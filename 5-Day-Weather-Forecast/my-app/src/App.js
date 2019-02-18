import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">5 Day Weather Forecast</h1>
        </header>
        <div>
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}

export default App;
