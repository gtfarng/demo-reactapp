import React, {Component} from 'react';
import './App.css'

class Input extends Component{
  state = { x:100 }
  htext = (event) => {console.log(event.target.value)}

updateNumber =(number)=>{
  console.log('Debug: '+number)
  number=parseInt(number)
  this.setState({number})
}

render(){
  return(
  <div>
    <h1> Name : {this.state.x}</h1>
   <br/><input type='text' name='number' onChange={this.htext}/> <br/>
  <button onClick={() => this.updateNumber(this.state.x)}>Update</button>
  
  </div>


  )}


  } 
export default Input;