import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './UserForm';

class App extends Component {
  state ={
    repos: null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user){

      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
      const repos = res.data.public_repos;
      this.setState({repos: repos});
      })

    } else {

      return

    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        <UserForm getUser={this.getUser} />
        {this.state.repos ? <h2>Number of repos: <span>{this.state.repos}</span></h2> :
        <h2>Please enter a user name</h2>}
      </div>
    );
  }
}

export default App;
