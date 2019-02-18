import React, { Component } from 'react';
import '../App.css';

class Counter extends Component{

  state = { count:0 }
  /*
  constructor(props) 
  {
    super(props)
    //this.add = this.add.bind(this)
 }*/
   /*
   add = function() 
  {
    this.setState({count:this.state.count+1})
  }
*/

  add = () =>
  {
    this.setState({count:this.state.count+1})
  }

/*
   delete = function() 
  {
    this.setState({count:this.state.count-1})
  }
*/
   
   delete = () =>
  {
    this.setState({count:this.state.count-1})
  }


   reset = () =>
  {
    this.setState({count:0})
  }

  render() 
  {
    return (
      <div>

      <h1 class='head u1'>Counter</h1>
      <h1>{this.state.count}</h1>

      <button class="button" onClick={this.add}>Up</button>
      <button class="button"  onClick={this.delete}>Down</button>
      <button class="button"  onClick={this.reset}>Reset</button>
      
       </div>

            )}
}

export default Counter;


