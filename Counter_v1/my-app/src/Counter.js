import React, {Component} from 'react'
import './App.css'
import './bootstrap.min.css'

class Counter extends Component
{   
  state={Zero:0,Num:0,INum:100}

   constructor(props)
  {
    super(props)
    this.ops = this.ops.bind(this);
    this.text = this.text.bind(this);
    this.Change = this.Change.bind(this);
    this.Submit = this.Submit.bind(this);
  }
    
  text=(event)=> 
  {
    console.log(event.target.value) 
  }

  Change=(event)=> 
  {
    this.setState({value: event.target.value});
  }

  Submit=(event)=>
  {
    this.setState({Num:this.state.value})
    event.preventDefault();
  }

  ops=(c)=>
  {
    if(c==="Up")
    {
      this.setState({Num:this.state.Num+1})
    }
    else if(c==="Down")
    {
      this.setState({Num:this.state.Num-1})
    }
    else if(c==="Reset")
    {
      this.setState({Num:this.state.Zero})
    }
    
  }

render()
{   
  
  return(

    <div>
    
    <br></br> 
    <div class="container bg-info">
    <div class="row">
    <div class="col-sm-2 "></div>
    <div class="col-sm-8">
     
     <h1 class="display-6 "> Counter App </h1>
           
    </div>
    <div class="col-sm-2 "></div>
    </div>
    </div>

    <div class="container bg-light">
    <div class="row">
    <div class="col-sm-2 "></div>
    <div class="col-sm-8">
     <br></br>
     <h3>Counter : {this.state.Num} </h3> <br></br>

        <form onSubmit={this.Submit}>
        <label>
      
          <input type="text" placeholder="Enter Number" value={this.state.value} onChange={this.Change} />
        </label>
        <input class="btn btn-success" type="submit" value="Set" />
      </form>
      
        <button class="btn btn-primary" onClick={()=> this.ops('Up')}>Up</button>
        <button class="btn btn-danger" onClick={()=> this.ops('Down')}>Down</button>
        <button class="btn btn-warning" onClick={()=> this.ops('Reset')}>Reset</button>

    </div>
    <div class="col-sm-2 "></div>
    </div>
    </div>

    </div>
 
          )}

}
export default Counter