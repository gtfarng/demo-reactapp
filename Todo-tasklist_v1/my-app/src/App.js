import React,{ Component } from 'react'
import './App.css'
import Tasklist from './Tasklist'
import Inputtask from './Inputtask'
import './bootstrap.min.css'

class App extends Component{

  state={
    tasks:[ {id:1, task:'Do Homework'},
            {id:2,task:'Read Book'},
            {id:3,task:'Programing'},
            {id:4,task:'Exercise'},
            {id:5,task:'Travel'}],
            id:6

  }

  addTask=(task)=>
  {
    this.setState({
          tasks:[...this.state.tasks,{id:this.state.id,task}],
          id:this.state.id+1
    })
  }


render(){

  return(
      


      <div align='center'>
        <br/><h1 class="head" >To DO !</h1>
        <Tasklist tasks={this.state.tasks} />
        <Inputtask addTask={this.addTask} id={this.state.id} />
      
      </div>



    )}




}
export default App  