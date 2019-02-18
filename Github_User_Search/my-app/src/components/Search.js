import React, {Component} from 'react';

class Search extends Component {

	onSubmit=(event)=> 
	{
		event.preventDefault();
		let username = this.refs.username.value.trim();
		if (!username) {
			alert('Username is empty. Please enter a username');
			return;
		}
		this.props.onSubmitForm(username);
		this.refs.username.value = '';
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<form onSubmit={this.onSubmit.bind(this)}>
						<div className="form-group">
							<input ref="username"
										 type="text"
										 className="form-control"
										 placeholder="Enter Github username and press the Enter key"/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Search;