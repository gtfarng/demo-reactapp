import React, {Component} from 'react';
import './App.css'


class App extends Component{
  state = { number:0,name: '#GTfarng',text:'Jatupat Pannoi'}
  constructor(props){
    super(props)
    this.up=this.up.bind(this)
    this.down=this.down.bind(this)
    this.reset=this.reset.bind(this)
    this.oprate=this.oprate.bind(this)

  }

up = () =>{
    this.setState({number:this.state.number+1}) 
}

down = () =>{
    this.setState({number:this.state.number-1}) 
}

reset = () =>{
    this.setState({number:this.state.number=0}) 
}

oprate = (ops) =>{
  if(ops==='+')
    this.setState({number:this.state.number+1}) 
  else
    this.setState({number:this.state.number-1}) 
}



  render(){

    return(
      <div align='center'>
        <h1>Hello, World!</h1>
        
        <h1>Counter App : {this.state.number}</h1>
        <button onClick={this.up}>Up</button>
        <button onClick={this.down}>Down</button>

        <button onClick={this.reset}>Reset</button>
          <button onClick={() => this.oprate('+')}>+</button>
          <button onClick={() => this.oprate('-')}>-</button>
          <br/>
      
        <Input name="Jatupat" method={this.updateNumber}/>

        
        <h2>{this.state.text}</h2>
        <h3>{this.state.name}</h3>
        


      </div>
  
      )} 
}

export default App;


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

   <br/><input type='text' name='number' onChange={this.htext}/> <br/>
  <button onClick={() => this.updateNumber(this.state.x)}>Update</button>
  
  </div>


  )}


  } 




