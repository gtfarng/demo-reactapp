import React from 'react';

const UserForm = (props) => 
{
	return(
		<div>
		
			<br/><form onSubmit={props.getUser}>
				
				<input type="text" placeholder="UserName" name="username"/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default UserForm;