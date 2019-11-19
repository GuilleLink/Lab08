import React, {Component} from "react";
import ReactDOM from "react-dom";
import Boton from './components/Boton/boton';
import Screen from './components/Screen/screen';
import './index.scss'

class App extends Component{
  constructor(props){
    super(props)  
    this.valueFather = this.valueFather.bind(this)
    this.totalValue = this.totalValue.bind(this)
    this.finalValue = ""
  }

  render(){
    return (<div className="calcu">
      <Screen screenValue='' />
      <Boton id='num1' valor='1' click={this.valueFather} />        
      <Boton id='num2' valor='2' click={this.valueFather} />
      <Boton id='num3' valor='3' click={this.valueFather} />
      <Boton id='num4' valor='4' click={this.valueFather} />
      <Boton id='num5' valor='5' click={this.valueFather} />
      <Boton id='num6' valor='6' click={this.valueFather} />
      <Boton id='num7' valor='7' click={this.valueFather} />
      <Boton id='num8' valor='8' click={this.valueFather} />
      <Boton id='num9' valor='9' click={this.valueFather} />
      <Boton id='num0' valor='0' click={this.valueFather} />
    </div>)
  }

  valueFather(valor){
    console.log(this.finalValue)
    this.finalValue = this.finalValue + valor
    console.log(this.finalValue)
    console.log(valor)
  }

  totalValue(value){

  }
}

ReactDOM.render(<App />, document.querySelector("#root"));