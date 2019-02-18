import React from 'react';

import UserRepo from './UserRepo';

const userRepos = (props) => (
	<div className="card">
		<h5 className="card-header">User Repos</h5>
		<div className="card-body">
			{
				props.userRepos.map(repo => {
					return <UserRepo repo={repo} key={repo.id} {...this.props}/>
				})
			}
		</div>
	</div>
);

export default userRepos;