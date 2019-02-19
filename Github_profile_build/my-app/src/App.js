import React, { Component } from 'react';
import logo from './GitHub-Logo.svg';
import './App.css';
import Github from './Component/Github'

export default class App extends Component {
  render() {
    return (
      <div className="p-3 mb-2 bg-primary text-white">
        <header className="App-header p-3 mb-2 bg-primary text-white">

          <img src={logo} alt="logo" width='200px' />


          <div class="container">

            <div class="row" align="center">
              <div class="col-sm-2"></div>
              <div class="col-sm-8">

               <br/> <h1 className="font-weight-lighter"><strong>Github Profile</strong></h1>
                

              </div>
              <div class="col-sm-2"></div>
            </div>
          </div>


        </header>

        <div>
          <Github />
        </div>


      </div>
    );
  }
}

