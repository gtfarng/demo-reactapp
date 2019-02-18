import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

class App extends Component {

  state = {    temprature:'',city:'',country:'',humidity:'',wind:'',pressure:'',descripion:'',error:'',maindescription:'',  }

  getWeather = async(e) => 
  {
    e.preventDefault();
    const api_key='cfeb725d01644b47a77c881dfaa4b39b'
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
    const data = await api_call.json();
    if(city && country)
    {
      console.log(data);  
      this.setState(
      {
        temprature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        wind:data.wind.speed,
        pressure:data.main.pressure,
        description:data.weather[0].description,
        maindescription:data.weather[0].main,
        error:" ",
      }) 
    }
    else
      {
        this.setState({temprature:'',city:'',country:'',humidity:'',wind:'',pressure:'',description:'',maindescription:'',error:"Please enter a value",}) 
      }
    
  }

  render() {
    return (
      <div className="fullcontent">
        <div className="wrapper">
        
          <Titles 
              maindescription={this.state.maindescription}            
              temprature={this.state.temprature}/>

          <div className="info">
            <div className="location">
              <Form getWeather={this.getWeather}/>
          </div>

            <div className="stats">
              {
                this.state.temprature && <p>Statistics</p>
              }

              <Weather 
                temprature={this.state.temprature}
                city = {this.state.city}
                country = {this.state.country}
                humidity = {this.state.humidity}
                wind = {this.state.wind}
                pressure = {this.state.pressure}
                description = {this.state.description}
                error = {this.state.error}/>
              
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


