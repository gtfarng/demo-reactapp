import React, {Component} from "react";
//import axios from "axios";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
const API_KEY = "cfeb725d01644b47a77c881dfaa4b39b";


export default class App extends Component {
  state =   { data:null, temperature:'', city:'', country:'', humidity:'', description:'', error:''  }

  getWeather = async (e) => 
  {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    

    /*
    if (API_KEY) 
    {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
      .then((res) => 
      {
        const data = res.data;
        this.setState({ data });
      })
    } 
    else return;
  }

*/    


/*
getUser = (e) => 
  {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) 
    {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => 
      {
        const data = res.data;
        this.setState({ data });
      })
    } 
    else return;
  }


*/
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) 
    {
      this.setState({
                          temperature: data.main.temp,
                          city: data.name,
                          country: data.sys.country,
                          humidity: data.main.humidity,
                          description: data.weather[0].description,
                          error: ""
      });
    } 
    else 
    {
      this.setState({ temperature:'', city:'', country:'', humidity:'', description:'', error: "Please enter the values." });
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  
                  <Form getWeather={this.getWeather} />
                  
                  <Weather    temperature={this.state.temperature}
                              humidity={this.state.humidity}  
                              city={this.state.city}
                              country={this.state.country}
                              description={this.state.description}
                              error={this.state.error}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

