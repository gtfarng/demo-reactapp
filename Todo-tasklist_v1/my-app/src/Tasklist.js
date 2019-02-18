import React, {Component} from 'react'
import './App.css'
import './bootstrap.min.css'

class Tasklist extends  Component{
render(){

	if(this.props.tasks)
	return( 
 	<div>

 	<br/><h2 class="text">TaskList</h2>

 	<br></br> 
    <div class="container">
    <div class="row">
    <div class="col-sm-4 color1 "></div>
    
    <div class="col-sm-4">
     
     <ul align="left">

	{
		this.props.tasks.map((item)=>(
 				<li key={item.id}> <h4><small> {item.task} </small></h4></li>

			))
	}

	</ul>

           
    </div>
    <div class="col-sm-4 color1 "></div>
    
    </div>
    </div>

	
 	
 	</div>
	
	)}


}
export default Tasklist