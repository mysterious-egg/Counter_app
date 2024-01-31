import React from "react";
import './App.css'

export default class App extends React.Component{

  constructor(){
    super()
    this.state = { count:0}
  }

  incre = () =>{
    this.setState ({count: this.state.count+1})
  }

  decres = () =>{
    if(this.state.count>0){
    this.setState ({count: this.state.count-1})
    }
  }

  reset = () =>{
    this.setState ({count:0})
  }

  render(){
    return(
      <div className="all">
        <h1>Counter App</h1>
        <div className="redZero">{this.state.count}</div>
        <div className="btn">
          <button className="bt1" onClick={this.incre}>+</button>
          <button className="bt2" onClick={this.decres}>-</button>
          <button className="bt3" onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

