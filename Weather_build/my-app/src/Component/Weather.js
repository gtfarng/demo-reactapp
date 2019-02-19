import React, { Component } from 'react'
import axios from "axios"
import Form from "./Form"
import img2 from "../pic2.png"

const API_KEY = "cfeb725d01644b47a77c881dfaa4b39b";
const Country = "Thailand";

export default class Weather extends Component {
    state = { data: null }

    getWeather = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        if (city) {
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${Country}&appid=${API_KEY}&units=metric`).then((res) => {
                const data = res.data;
                this.setState({ data });
            })
        }
        else return;
    }

    render() {
        return (
            <div className="p-3 mb-2 bg-white text-dark">

                <br /><h3 className="p1">The Weather Search — Enter the  City or Location</h3>

                <img src={img2} alt="img2" width="60%" />



                {this.state.data ?

                    <p><div>

                        <br />

                        <div class="card ">
                            <div class="card-body">

                                <p class="card-text">


                                    <div class="row">
                                        <div class="col-sm-3"></div>
                                        <div class="col-sm-6">



                                            <table class="table table-hover f-size">
                                                <thead>

                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"><strong>Location :</strong></th>
                                                        <td>{this.state.data.name} - {this.state.data.sys.country} </td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><strong>GPS Coord :</strong></th>
                                                        <td>[ {this.state.data.coord.lon} , {this.state.data.coord.lat} ]</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><strong>Weather :</strong></th>
                                                        <td>{this.state.data.weather[0].main} and {this.state.data.weather[0].description}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><strong>Temperature :</strong></th>
                                                        <td>{this.state.data.main.temp}&deg;C</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><strong>Pressure :</strong></th>
                                                        <td>{this.state.data.main.pressure} hPa</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><strong>Humidity :</strong></th>
                                                        <td>{this.state.data.main.humidity} %</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><strong>Wind :</strong></th>
                                                        <td>{this.state.data.wind.speed} m/s and Direction to {this.state.data.wind.deg}&deg; </td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><strong>Time :</strong></th>
                                                        <td>{new Date().toLocaleTimeString()}</td>

                                                    </tr>

                                                </tbody>
                                            </table>

                                        </div>
                                        <div class="col-sm-3"></div>
                                    </div>

                                </p>

                            </div>
                        </div>

                    </div>
                    </p> : <p></p>}

                <Form getWeather={this.getWeather} />

                <br />

            </div>

        )
    }


}