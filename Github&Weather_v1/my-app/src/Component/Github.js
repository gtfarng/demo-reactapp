import React, {Component} from 'react'
import axios from "axios";
import GithubForm from "./GithubForm";

export default class Github extends Component{
    state =   { data:''  }

  getUser = (e) => 
  {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) 
    {
      axios.get(`https://api.github.com/users/${user}`).then((res) => 
      {
        const data = res.data;
        this.setState({ data });
      })
    } 
    else return;
  }

render(){

    return(
        <div>

            <h1>Github Profile</h1>

            { this.state.data ? 

            <p>
            <img src={this.state.data.avatar_url} alt="avatar" width="150px"/><br/><br/>

            Name: { this.state.data.name }<br/>
            Username: { this.state.data.login }<br/>
            Website:{ this.state.data.blog } <br/>
  
            </p> : <p></p> }

            <br/><GithubForm getUser={this.getUser} /><br/>




        </div>


    )}


}