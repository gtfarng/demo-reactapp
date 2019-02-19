import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'
import Form from './Form'
import code from '../code.svg'
import profile from '../ss.png'

export default class Github extends Component {

    state = { data: '' }

    getUser = (e) => {
        e.preventDefault();
        const user = e.target.elements.username.value;
        if (user) {
            axios.get(`https://api.github.com/users/${user}`).then((res) => {
                const data = res.data;
                this.setState({ data });
            })
        }
        else return;
    }

    render() {

        return (

            <div align='center'>


                <div>

                    <div class="container p-3 mb-2 bg-light text-dark">


                        <div class="card">
                            <div class="card-body" align='center'>
                                <h4 class="card-title">Search</h4>

                                <div class="container">

                                    <div class="row">
                                        <div class="col-sm-1"></div>
                                        <div class="col-sm-10">

                                            <div class="card">
                                                <div class="card-body width" >

                                                    {this.state.data ?

                                                        <p>
                                                            <img src={this.state.data.avatar_url} alt="avatar" width="200px" /><br /><br />


                                                            <table class="table" align="center">

                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row">Name:</th>
                                                                        <td>{this.state.data.name}</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">Username:</th>
                                                                        <td>{this.state.data.login}</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">Website:</th>
                                                                        <td>{this.state.data.blog} </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">Location:</th>
                                                                        <td>{this.state.data.location}</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">Repos:</th>
                                                                        <td>{this.state.data.public_repos}</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">Update:</th>
                                                                        <td>{this.state.data.updated_at}</td>

                                                                    </tr>
                                                                </tbody>
                                                            </table>


                                                        </p> : <p>

                                                            <img align="left" src={profile} alt="profile" width="200px" />
                                                        </p>
                                                    }


                                                </div>
                                            </div>



                                        </div>
                                        <div class="col-sm-1"></div>
                                    </div>
                                </div>


                                <br /><Form getUser={this.getUser} /><br />


                            </div>

                        </div>


                    </div>


                </div>

                <br /><header className="App-header p-3 mb-2 bg-primary text-white">
                    <img src={code} alt="logo" width="150px" /><br />
                    <a href="https://gtfarng/github.io/"><h3 className="link"> Link </h3></a>
                </header>

                <footer class="container-fluid text-center">
                    <p>#GTfarng</p>
                </footer>

            </div>



        )
    }



}