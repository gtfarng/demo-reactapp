import React,{Component} from 'react'
import './App.css'

export default class App extends Component{

    Alert=()=>
    {
        alert("Hello, World!");
    }

    render()
    {
        return (
          <div>

          <Passprops name="JATUPAT" handleAlert={this.Alert} />
          <TestState  />

          </div>
          );
    }
}

class Passprops extends Component{
    render()
    {
        return (<div>
            <h1>Hello ! : {this.props.name}</h1>
            <button onClick={this.props.handleAlert}>Click me</button>
            <h1>Hello !!!:{this.props.name}</h1>
            </div>
                );
    }
}

class TestState extends Component{

    constructor(props) 
    {
        super(props);
        this.state = {name: "Hello, World!",
            inputList:[ 
                {name:"Watch",price:10000000},
                {name: "Dimon Ring" ,price: 300000}
                ]};
    }

    change=()=>
    {
        this.setState({name:"#GTfarng"});
    }

    Addstate=()=>
    {
      var product =
      {
        name:"Lambogini",
        price:1500000
      }
    this.setState({inputList:this.state.inputList.concat(product)});
    }

    render()
    {
        var myAccessory = this.state.inputList.map((myitem)=>{
        return(
            <h1>Item: { myitem.name } Price:{ myitem.price}</h1>
        );
        });

        return (
        <div>

        <h1>{this.state.name}</h1>
        <h1>Item: { this.state.inputList[0].name } Price:{ this.state.inputList[0].price }</h1>
        <h1>Item: { this.state.inputList[1].name } Price:{ this.state.inputList[1].price }</h1>
        <h1>State:{ this.state.name}</h1>
        <button onClick={this.change}>Change State</button>
        
        {myAccessory}
       
        <button onClick={this.Addstate}>Add State</button>
       
        <button onClick={this.change}>Change State</button>
      
        

        </div>
    )}
}