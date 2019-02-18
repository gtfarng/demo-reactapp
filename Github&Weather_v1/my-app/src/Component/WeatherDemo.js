import React, {Component} from 'react'
import axios from "axios";
import WeatherForm from "./WeatherForm";

const API_KEY = "cfeb725d01644b47a77c881dfaa4b39b";
const Country ="Thailand";

export default class WeatherDemo extends Component{
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

            <h1>Weather Demo</h1>

            { this.state.data ? 

            <p><div>

                 coord =><br/>   
                            lon:{ this.state.data.coord.lon } <br/>
                            lat:{ this.state.data.coord.lat } <br/>
                 weather=><br/> 
                            id:{ this.state.data.weather[0].id } <br/>
                            main:{ this.state.data.weather[0].main }<br/>
                            description:{ this.state.data.weather[0].description }<br/>
                            icon:{this.state.data.weather[0].icon}<br/>

                           
                           
                            <img src="http://openweathermap.org/img/w/02n.png" alt="icon0" width="50px"/><br/>
                            
                base=><br/> 
                            base:{ this.state.data.base }<br/>
                main=><br/>          
                            temp:{ this.state.data.main.temp } <br/>
                            pressure:{ this.state.data.main.pressure }<br/>
                            humidity:{ this.state.data.main.humidity }<br/>
                            temp_min:{ this.state.data.main.temp_min }<br/>
                            temp_max:{ this.state.data.main.temp_max }<br/>
                visibility=><br/> 
                            visibility:{ this.state.data.visibility }<br/>
                wind=><br/> 
                            speed:{ this.state.data.wind.speed }<br/>
                            deg:{ this.state.data.wind.deg }<br/>
                clouds=><br/> 
                            clouds:{ this.state.data.clouds.all }<br/>
                dt=><br/> 
                            dt:{ this.state.data.dt }<br/>
                sys=><br/>          
                            type:{ this.state.data.sys.type } <br/>
                            id:{ this.state.data.sys.id }<br/>
                            message:{ this.state.data.sys.message }<br/>
                            country:{ this.state.data.sys.country }<br/>
                            sunrise:{ this.state.data.sys.sunrise }<br/>
                            sunset:{ this.state.data.sys.sunset }<br/>
                id=><br/> 
                            id:{ this.state.data.id }<br/>
                name=><br/> 
                            name:{ this.state.data.name }<br/>
                cod=><br/> 
                            cod:{ this.state.data.cod }<br/>
                
                   </div> 
                </p> : <p></p> }

            
            <br/><WeatherForm getWeather={this.getWeather} /><br/>

        </div>


    )}


}