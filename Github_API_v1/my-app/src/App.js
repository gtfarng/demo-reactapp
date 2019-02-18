import React, {Component} from 'react'
import './App.css'
import Github from './Github'
import Git from './Git'
import Test from './Test'


class App extends Component{
render(){

  return(
  <div align="center">

  <h1>Github API App</h1>
  <Github />
  <Git />

  <Test />
 

  </div>

 

    )
}

}

export default App