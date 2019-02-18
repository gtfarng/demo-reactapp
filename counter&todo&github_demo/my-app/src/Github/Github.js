import React, {Component} from 'react';
import axios from 'axios';

class Github extends Component 
{
  	state = { user: 'gtfarng', data:''}
  	
  	componentDidMount = () => this.fetchUser(this.state.user)
  	
  	fetchUser = (USER) => 
    {
  	 	axios.get(`https://api.github.com/users/${USER}`)
  		  	 .then(response => 
           {
  				this.setState({data: response.data})
  				console.log(response.data)
  		    })
 }

  	render() 
  	{
  		const {data} = this.state
  		if (data)
  				return ( <div>
                    <h1 class='head u1'> Github API </h1>

        <img src={data.avatar_url} alt="avatar" width="150px"/><br/>
                 <br/> <span class="C1">ID</span>:{data.id}<br/>
                 <span class="C1">Name</span>: {data.name}<br/> 
                    <span class="C1">User</span>: {data.login}<br/> 
                    <span class="C1"> Website</span>: {data.blog}<br/> <br/><br/>
                   
                  </div> 
                  )
  		
          return (<div>.</div>

                  )}
}

export default Github
