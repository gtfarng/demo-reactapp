import React, { Component } from 'react';
import './App.css';
import Counter from './Counter/Counter'
import Github from './Github/Github'
import InputTask from './Todo/InputTask'
import TaskList from './Todo/TaskList'

class App extends Component {

   state = 
   {
       tasks: [{id: 1, task: 'Programing', place: 'Company',date:'15-02-2562',daytime:'2562-01-01T12:00'},
               {id: 2, task: 'Installing', place: 'Outdoor',date:'15-02-2562',daytime:'2562-02-01T17:00'}],
       id:3
   }

   addTask = (task,place,date,daytime) => 
   {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id, task, place,date,daytime } ],
                id: this.state.id+1  })
   }

  render() {
    return (
      <div>
        <div className="box">
        <Counter /><br/><br/>
        </div>

        <div className="box1">
        <TaskList tasks={this.state.tasks}/>
               <InputTask addTask={this.addTask} id={this.state.id}/>
        </div>

        <div className="box">
        <Github />
        </div>
      </div>
    );
  }
}

export default App;
