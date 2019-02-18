import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const USER = 'gtfarng';

class Profile extends Component {

    constructor(props)
    {
        super(props)
        this.state = {  data: {} }
    }

    componentDidMount=()=>
    {
        axios.get(`https://api.github.com/users/${USER}`)
            .then(response => {
                    this.setState({data : response.data})
                    console.log(response.data)
                }
            )
    }

    render() 
    {
        const dataOption = Object.keys(this.state.data)
            .map( (key,index) =>
                <option value={index}>
                    {index+1 +'. ' +key+ ': '  + this.state.data[key]}
                </option>
            )

        return (
            <div align="center" class="App-header">
            
                    <h1 class="App-link">My Github Profile</h1>
                    <img src={this.state.data.avatar_url} alt="avatar" width="150px"/> <br/>
                    <ul>
                       <h3 align="left"> 
                        <li>{this.state.data.name}</li>
                        <li>{this.state.data.login}</li>
                        <li>{this.state.data.url}</li>
                        <li>{this.state.data['blog']}</li> </h3>
                    </ul>

                    <dd><select>{dataOption}</select></dd>

                   
            </div>
        );
    }
}

export default Profile;