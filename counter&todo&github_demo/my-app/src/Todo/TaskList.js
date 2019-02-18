import React, {Component} from 'react'

class TaskList extends Component {
   render() {
       if ( this.props.tasks )
           return (
           	<div>
 			<h1 class='head u1'> To Do  </h1>
           	<ul > 
           	{
                   this.props.tasks.map((item) => 
                   (
                       <li align="left" key={item.id}>{item.task} at {item.place} in {item.daytime}</li>
                   ))
               }
           </ul>


           </div>)
   }
}

export default TaskList