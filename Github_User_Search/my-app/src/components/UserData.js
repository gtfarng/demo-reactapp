import React from 'react';

import UserRepos from './UserRepos';

const userData = (props) => (
			<div className="card">
				<h5 className="card-header">
					{props.userData.name}
				</h5>
				<div className="card-body">
					<div className="row">
						<div className="col-md-4">
							<img className="img-thumbnail" src={props.userData.avatar_url} alt={props.userData.name} /><br />
							<a href={props.userData.html_url} target="_blank" className="btn btn-secondary btn-block">View Profile</a>
						</div>
						<div className="col-md-8">
							<div className="stats">
								<span className="badge badge-primary">{props.userData.public_repos} Public Repos</span>&nbsp;
								<span className="badge badge-success">{props.userData.followers} Followers</span>&nbsp;
								<span className="badge badge-info">{props.userData.following} Following</span>
							</div>
							<br/>
							<ul className="list-group">
								<li className="list-group-item">Username: {props.userData.login}</li>
								<li className="list-group-item">Location: {props.userData.location}</li>
								<li className="list-group-item">Email: {props.userData.email}</li>
								<li className="list-group-item">Blog: {props.userData.blog}</li>
							</ul>
						</div>
					</div>
					<hr />
					<UserRepos userRepos={props.userRepos} />
				</div>
			</div>
		);

export default userData;