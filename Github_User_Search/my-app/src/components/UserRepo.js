import React from 'react';

const userRepo = (props) => (
	<div>
		<div className="row">
			<div className="col-md-10">
				<h4><a href={props.repo.html_url} target="_blank">{props.repo.name}</a></h4>
				<p>REPO DESCRIPTION</p>
			</div>
			<div className="col-md-2">
				<span className="badge badge-primary">{props.repo.watchers} Watchers</span><br/>
				<span className="badge badge-success">{props.repo.forks} Forks</span>
			</div>
		</div>
		<hr/>
	</div>

);

export default userRepo;