import React, { Component } from 'react';
import './App.css';
import Profile from "./Profile";

class App extends Component {
  
  render() 
  {
    return (
      <div className="container">
        
       
        { <Profile /> }

      </div>
    
    )}
}

export default App;
