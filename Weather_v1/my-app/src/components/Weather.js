import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="statpairbox">
        {this.props.temprature &&
          <div className="statpair">
            <div className="statname">Temprature/อุณหภูมิ</div>
            <div className="statvalue">{(this.props.temprature-273).toFixed(2) +" C"}</div>
          </div>
        }
        {this.props.wind &&
          <div className="statpair">
            <div className="statname">Wind/ความเร็วลม</div>
            <div className="statvalue">{this.props.wind + " Km/hr"}</div>
          </div>
        }
        {this.props.humidity &&
          <div className="statpair">
            <div className="statname">Humidity/ความชื้น</div>
            <div className="statvalue">{this.props.humidity + "%"}</div>
          </div>
        }
        {this.props.pressure &&
          <div className="statpair">
            <div className="statname">Pressure/ความดัน</div>
            <div className="statvalue">{this.props.pressure + " mb"}</div>
          </div>
        }
        {this.props.description &&
          <div className="statpair">
            <div className="statname">Condition/สภาพอากาศ</div>
            <div className="statvalue">{this.props.description}</div>
          </div>
        }
        {this.props.error &&
          <div className="statpair">
            <div className="statvalue">{this.props.error}</div>
          </div>
        }
      </div>
    );
  }
}

export default Weather;







