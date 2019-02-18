import React, {Component} from 'react'
import './App.css'
import './bootstrap.min.css'

class Inputtask extends Component{

	state={task:''}
	change=(e)=>
	{
		this.setState({[e.target.name]:e.target.value})
	}

render(){

	return(
 	
 	<div>
 	 	
 	<br/><h2 class="text">InputTask </h2>
 	
 	<input type='hidden' name='id' value={this.props.id} /> <br/>
 	<input type='text' name='task' placeholder="Activities" onChange={this.change} /> <br/>
 	<button onClick={()=> this.props.addTask(this.state.task)} >Add</button>


 	</div>
 	

		)
}



}
export default Inputtask