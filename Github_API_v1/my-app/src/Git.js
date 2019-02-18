import React,{Component} from 'react'
import axios from 'axios'
import './App.css'

class Test extends Component{
  
   state={ user:'wwarodom',data:''}

   componentDidMount=()=>
   {
    this.fetchUser(this.state.user)
   }

   fetchUser=(user)=>
   {
     axios.get(`https://api.github.com/users/${user}`)
      .then(response =>
      {
        this.setState({data: response.data})
        console.log(response.data)
      })
   }

render() {
       const {data} = this.state
       if (data)
           return ( 
            <div>{data.id}: {data.name} <img src={data.avatar_url} alt="avatar" width="50px"/> </div> )
            
       return (<div>.</div>);
   }
}
export default Test