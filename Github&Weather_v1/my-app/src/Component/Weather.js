import React, {Component} from 'react'
import axios from "axios";
import WeatherForm from "./WeatherForm";

const API_KEY = "cfeb725d01644b47a77c881dfaa4b39b";
const Country ="Thailand";

export default class Weather extends Component{
    state =   {    data: null  }

 
  getWeather = (e) => 
  {
    e.preventDefault();
    
    const city = e.target.elements.city.value;

    if (city) 
    {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${Country}&appid=${API_KEY}&units=metric`).then((res) => 
      {
        const data = res.data;
        this.setState({ data });
      })
    } 
    else return;
  }

render(){

    return(
        <div>

            <h1>Weather</h1>
            <WeatherForm getWeather={this.getWeather} />

            { this.state.data ? 

            <p><div>
                
               
                  <strong>Location :</strong> {this.state.data.name}- { this.state.data.sys.country } [{ this.state.data.coord.lon },{ this.state.data.coord.lat }]<br/>
                  <strong>Weather :</strong> {this.state.data.weather[0].main} and {this.state.data.weather[0].description} <br/>
                  <strong>Temperature Average :</strong> {this.state.data.main.temp} &deg;C<br/>
                  <strong>Yesterday Max Temperature :</strong> {this.state.data.main.temp_max} &deg;C<br/>
                  <strong>Morning Min Temperature :</strong> {this.state.data.main.temp_min} &deg;C<br/>
                  <strong>Pressure :</strong> {this.state.data.main.pressure} hPa<br/>
                  <strong>Humidity :</strong> {this.state.data.main.humidity} %<br/>
                  <strong>Wind Speed :</strong> {this.state.data.wind.speed} m/s<br/>
                  <strong>Wind Direction :</strong> {this.state.data.wind.deg} &deg;<br/>
                   
                    

                    
                
                
                   </div> 
                </p> : <p></p> }

            
           

        </div>


    )}


}