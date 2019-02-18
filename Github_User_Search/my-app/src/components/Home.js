import React, {Component} from 'react';
import axios from 'axios';

import Search from './Search';
import UserData from './UserData';

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username: 'gtfarng',
			userData: [],
			userRepos: []
		}
	}

	//Get User Data from Github
	getUserData(username) {
		axios.get('https://api.github.com/users/' + username)
			.then(response => {
				this.setState({userData: response.data});
			})
			.catch(error => {
				alert(error);
			});
	}

	//Get User Repos from Github
	getUserRepos(username) {
		axios.get('https://api.github.com/users/' + username + '/repos')
			.then(response => {
				this.setState({userRepos: response.data});
			})
			.catch(error => {
				alert(error);
			});
	}

	formSubmitHandler(username) {
		this.setState({userName: username}, () => {
			this.getUserData(username);
			this.getUserRepos(username);
		});
	}

	componentDidMount() {
		this.getUserData(this.state.username);
		this.getUserRepos(this.state.username);
	}

	render() {
		return(
			<div className="container">
				<Search onSubmitForm={this.formSubmitHandler.bind(this)}/>
				<UserData {...this.state}/>
			</div>
		);
	}
}

export default Home;