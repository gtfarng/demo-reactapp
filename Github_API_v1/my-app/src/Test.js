import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './UserForm';

class Test extends Component {
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
      this.setState({data: data});
      })

    } 
    else 
    {
      return
    }
  }
  
  render() {
    return (


      <div>                
        {this.state.data ?<p><img src={this.state.data.avatar_url} alt="avatar" width="50px"/>{this.state.data.id}:{this.state.data.name}</p>:<h3></h3>}
        <UserForm getUser={this.getUser} />
      </div>
    );
  }
}

export default Test;