import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import UserForm from "./components/UserForm";

class App extends Component {
  state = 
  {
    data: null
  }

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github Profile</h1>
        </header>
       
        { this.state.data ? 

        <p>
        <img src={this.state.data.avatar_url} alt="avatar" width="150px"/><br/><br/>
        
           Name: { this.state.data.name }<br/>
           Username: { this.state.data.login }<br/>
           Website:{ this.state.data.blog } <br/>
          
        
        </p> : <p></p> }

        <br/><UserForm getUser={this.getUser} />
      </div>
    );
  }
};

export default App;
