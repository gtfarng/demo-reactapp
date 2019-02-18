import React, {Component} from 'react';
import './App.css';
import Clock from "./components/Clock";
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        let CurrentMinutes = new Date(),
            minutes = (CurrentMinutes.getMinutes() < 10 ? '0' : '') + CurrentMinutes.getMinutes();
        let CurrentHour = new Date(),
            hour = (CurrentHour.getHours() < 10 ? '0' : '') + CurrentHour.getHours();
        let CurrentDay = new Date(),
            day = CurrentDay.getDay();
        let CurrentMonth = new Date(),
            month = CurrentMonth.getMonth();
        let NumberDay = new Date(),
            number = NumberDay.getDate();

        this.state = {
            countryCode: '',
            keyAPI: "38ad5d999b2c5b1341355e4b55ec5400",
            urlAPI: "",
            minutes: minutes,
            hour: hour,
            day: day,
            month: month,
            number: number,
            dataCurrent: [],
            dataWeek: [],
            currentTemp: '',
            currentSky: '',
            currentDesc: '',
            currentHum: '',
            dataDay: [],
            dataMaxWeek: [
                {time: "Jeu.", temp: 23},
                {time: "Ven.", temp: 26},
                {time: "Sam.", temp: 27},
                {time: "Dim.", temp: 30},
                {time: "Lun.", temp: 29},
            ],
            dataMinWeek: [
                {time: "Jeu.", temp: 15},
                {time: "Ven.", temp: 16},
                {time: "Sam.", temp: 15},
                {time: "Dim.", temp: 17},
                {time: "Lun.", temp: 18},
            ],
        };

    }

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=phuket,thailand&units=metric&appid=38ad5d999b2c5b1341355e4b55ec5400')
            .then(res => 
            {
                const dataCurrent = res.data;
                this.setState({dataCurrent: dataCurrent});
                this.setState({currentTemp: Math.round(dataCurrent.main.temp)});
                this.setState({currentDesc: dataCurrent.weather[0].main});
                this.setState({currentHum: dataCurrent.main.humidity});
                this.setState({currentSky: dataCurrent.weather[0].id});
                this.setState({countryCode: dataCurrent.sys.country});

               
            })

        //    http://api.openweathermap.org/data/2.5/forecast?q=Paris,fr&units=metric&appid=38ad5d999b2c5b1341355e4b55ec5400

        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Lille,fr&units=metric&appid=38ad5d999b2c5b1341355e4b55ec5400')
            .then(res => {
                const dataWeek = res.data;
                this.setState({dataDay: dataWeek.list});
                // console.log('issou', this.state.dataDay);
                // console.log('issou', this.state.dataDay[0].weather[0].id);
                this.setState({
                    dataDay: [
                        {
                            time: this.state.dataDay[0].dt_txt.slice(11, 16),
                            temp: Math.round(this.state.dataDay[0].main.temp)
                        },
                        {
                            time: this.state.dataDay[1].dt_txt.slice(11, 16),
                            temp: Math.round(this.state.dataDay[1].main.temp)
                        },
                        {
                            time: this.state.dataDay[2].dt_txt.slice(11, 16),
                            temp: Math.round(this.state.dataDay[2].main.temp)
                        },
                        {
                            time: this.state.dataDay[3].dt_txt.slice(11, 16),
                            temp: Math.round(this.state.dataDay[3].main.temp)
                        },
                        {
                            time: this.state.dataDay[4].dt_txt.slice(11, 16),
                            temp: Math.round(this.state.dataDay[4].main.temp)
                        },
                    ],
                });

            })
    }

    renderSky() {
        if (this.state.hour >= 8 && this.state.hour < 19) {
            return "day";
        } else if (this.state.hour >= 19 && this.state.hour < 21) {
            return "sunset";
        } else if (this.state.hour >= 21 || this.state.hour < 6) {
            return "night";
        } else {
            return "sunrise";
        }
    }

    static skyIcon(id) {
        if (id >= 200 && id <= 232) {
            return "storm";
        } else if (id >= 300 && id <= 321) {
            return "drizzle";
        } else if (id >= 500 && id <= 531) {
            return "rain";
        } else if (id >= 600 && id <= 622) {
            return "snow";
        } else if (id === 800) {
            return "sun";
        } else if (id === 801 || id === 802) {
            return "cloud_sun";
        } else if (id === 803 || id === 804 || (id >= 701 && id <= 781)) {
            return "cloud";
        } else {
            return "undefined";
        }
    }

    

    render() {
        const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
        const dayNames = ["Sun.", "Mon.", "Tue.", "Wed..", "Thu.", "Fri.", "Sat."];
        let day = this.state.day;
        let month = this.state.month;
        let number = this.state.number;


        return <div>
            <div className={"currentContainer " + this.renderSky()}>
                <p className="location" onClick={App.changeCity}><span
                    className="cityName">{this.state.dataCurrent.name}</span>, {this.state.countryCode}
                </p>
                <div className="currentWeather">
                    <div className="blockDate">
                        <Clock/>
                        <p className="currentDay">{dayNames[day]} {number} {monthNames[month]}</p>
                    </div>
                    <div className="blockWeather">
                        <div className={"currentIcon"}
                             style={{backgroundImage: "url('images/" + App.skyIcon(this.state.currentSky) + ".svg')"}}/>
                        <p className="currentTemperature">{this.state.currentTemp}°c</p>
                        <div className="currentInfos">
                            <p className="currentSky">{this.state.currentDesc}</p>
                            {/*::before goute*/}
                            <p className="currentRain">{this.state.currentHum}%</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>;
    }
}

export default App;