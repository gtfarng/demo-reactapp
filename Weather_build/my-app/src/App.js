import React, { Component } from 'react'
import Img1 from './img/ani1.svg'
import Img2 from './img/ani2.svg'
import Img3 from './img/ani3.svg'
import Img4 from './img/ani4.svg'
import Img5 from './img/ani5.svg'
import Img6 from './img/ani6.svg'
import Img7 from './img/ani7.svg'
import Img8 from './img/ani8.svg'
import Img9 from './img/ani9.svg'
import Img10 from './img/ani10.svg'
import Img11 from './img/ani11.svg'
import Img12 from './img/ani12.svg'
import Img13 from './img/ani13.svg'
import Img14 from './img/ani14.svg'
import Weather from './Component/Weather'
import code from './link.png'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App background">

        <header className="App-header"><br />
          <h1 className="heading"><strong>Weather App</strong></h1><br />
          <div className="container ">
            <img src={Img1} alt="img1" width="80px" />
            <img src={Img2} alt="img2" width="80px" />
            <img src={Img3} alt="img3" width="80px" />
            <img src={Img4} alt="img4" width="80px" />
            <img src={Img5} alt="img5" width="80px" />
            <img src={Img6} alt="img6" width="80px" />
            <img src={Img7} alt="img7" width="80px" />
          </div><br />
        </header>


        <div className="container"><br />
          <Weather />
        </div>


        <header className="App-header"><br />
          <div className="container">
            <img src={Img8} alt="img8" width="80px" />
            <img src={Img9} alt="img9" width="80px" />
            <img src={Img10} alt="img10" width="80px" />
            <img src={Img11} alt="img11" width="80px" />
            <img src={Img12} alt="img12" width="80px" />
            <img src={Img13} alt="img13" width="80px" />
            <img src={Img14} alt="img14" width="80px" />
          </div><br />

          <img src={code} alt="logo" width="150px" /><br />
                    <a href="https://gtfarng.github.io/"><h3 className="link"> Link </h3></a>

        </header>

        <footer>
          <p className="my">#GTfarng</p>
        </footer>
      </div>
    );
  }
}


