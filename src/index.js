import React, {Component} from "react";
import ReactDOM from "react-dom";
import Boton from './components/Boton/boton';
import Screen from './components/Screen/screen';
import './index.scss'

class App extends Component{
  constructor(props){
    super(props)  
    this.valueFather = this.valueFather.bind(this)
    
    this.state={
      totalValue: '',
      firstNumber: '',
      lastOperator: '',
      float: false,
    }
  }
  
  valueFather(valor){
    const value = valor.valor    
    if(this.state.totalValue.length <=9 || (value==='+' || value==='-' || value==='*' || value==='=' || value==='C'|| value==='AC' || value==='%')){    
      if (value==='C'){
        this.setState({totalValue: ''})
      }
      else if (value==='AC'){
        this.setState({totalValue: '', firstNumber: '', lastOperator: '', float: false})
      }
      else if (valor.id==='negPos' && this.state.totalValue.length < 9 && !this.state.float){    
        this.setState({totalValue: parseInt(this.state.totalValue) * -1})
      }
      else if (valor.id==='negPos' && this.state.totalValue.length <9 && this.state.float){
        this.setState({totalValue: parseFloat(this.state.totalValue) * -1})
      }
      else if(value==='%' && !this.state.float){
        this.setState({totalValue: parseFloat(this.state.totalValue) / 100, firstNumber: parseFloat(this.state.totalValue) / 100, float: true})
      }
      else if(value==='%' && this.state.float){
        this.setState({totalValue: parseFloat(this.state.totalValue) / 100})
      }
      else if(value==='.' && !this.state.float){
        this.setState({totalValue: this.state.totalValue + value, float: true})
      }
      else if(value==='.' && this.state.float){
        this.setState({float: true})
      }
      else if(value==='+' && this.state.firstNumber==='' && !this.state.float){
        this.setState({firstNumber: this.state.totalValue, totalValue: '', lastOperator: '+', float: false})
      }
      else if(value==='+' && this.state.firstNumber!=='' && !this.state.float){
        this.setState({totalValue: parseInt(this.state.firstNumber) + parseInt(this.state.totalValue), firstNumber: '', lastOperator: '+', float: false})
      }
      else if(value==='+' && this.state.firstNumber==='' && this.state.float){
        this.setState({firstNumber: this.state.totalValue, totalValue: '', lastOperator: '+', float: false})
      }
      else if(value==='+' && this.state.firstNumber!=='' && this.state.float){
        this.setState({totalValue: parseFloat(this.state.firstNumber) + parseFloat(this.state.totalValue), firstNumber: '', lastOperator: '+', float: false})
      }
      else if(value==='-' && this.state.firstNumber==='' && !this.state.float){
        this.setState({firstNumber: this.state.totalValue, totalValue: '', lastOperator: '-', float: false})
      }
      else if(value==='-' && this.state.firstNumber!=='' && !this.state.float){
        this.setState({totalValue: parseInt(this.state.firstNumber) - parseInt(this.state.totalValue), firstNumber: '', lastOperator: '-', float: false})
      }
      else if(value==='-' && this.state.firstNumber==='' && this.state.float){
        this.setState({firstNumber: this.state.totalValue, totalValue: '', lastOperator: '-', float: false})
      }
      else if(value==='-' && this.state.firstNumber!=='' && this.state.float){
        this.setState({totalValue: parseFloat(this.state.firstNumber) - parseFloat(this.state.totalValue), firstNumber: '', lastOperator: '-', float: false})
      }
      else if(value==='*' && this.state.firstNumber==='' && !this.state.float){
        this.setState({firstNumber: this.state.totalValue, totalValue: '', lastOperator: '*', float: false})
      }
      else if(value==='*' && this.state.firstNumber!=='' && !this.state.float){
        this.setState({totalValue: parseInt(this.state.firstNumber) * parseInt(this.state.totalValue), firstNumber: '', lastOperator: '*', float: false})
      }
      else if(value==='*' && this.state.firstNumber==='' && this.state.float){
        this.setState({firstNumber: this.state.totalValue, totalValue: '', lastOperator: '*', float: false})
      }
      else if(value==='*' && this.state.firstNumber!=='' && this.state.float){
        this.setState({totalValue: parseFloat(this.state.firstNumber) * parseFloat(this.state.totalValue), firstNumber: '', lastOperator: '*', float: false})
      }
      else if(value==='=' && this.state.lastOperator==='+' && !this.state.float){
        this.setState({totalValue: parseInt(this.state.firstNumber) + parseInt(this.state.totalValue), firstNumber: '', lastOperator: '', float: false})
      }
      else if(value==='=' && this.state.lastOperator==='-' && !this.state.float){
        this.setState({totalValue: parseInt(this.state.firstNumber) - parseInt(this.state.totalValue), firstNumber: '', lastOperator: '', float: false})
      }
      else if(value==='=' && this.state.lastOperator==='*' && !this.state.float){
        this.setState({totalValue: parseInt(this.state.firstNumber) * parseInt(this.state.totalValue), firstNumber: '', lastOperator: '', float: false})
      }
      else if(value==='=' && this.state.lastOperator==='+' && this.state.float){
        this.setState({totalValue: parseFloat(this.state.firstNumber) + parseFloat(this.state.totalValue), firstNumber: '', lastOperator: '', float: false})
      }
      else if(value==='=' && this.state.lastOperator==='-' && this.state.float){
        this.setState({totalValue: parseFloat(this.state.firstNumber) - parseFloat(this.state.totalValue), firstNumber: '', lastOperator: '', float: false})
      }
      else if(value==='=' && this.state.lastOperator==='*' && this.state.float){
        this.setState({totalValue: parseFloat(this.state.firstNumber) * parseFloat(this.state.totalValue), firstNumber: '', lastOperator: '', float: false})
      }
      else if(value==='=' && this.state.lastOperator===''){
        this.setState({totalValue: this.state.totalValue, firstNumber: '', lastOperator: ''})
      }
      else{
        this.setState({totalValue: this.state.totalValue + value})
      }
    }
    else{
      if (valor.id==='negPos' && !this.state.float){    
        this.setState({totalValue: parseInt(this.state.totalValue) * -1})
      }
      else if (valor.id==='negPos' && this.state.float){
        this.setState({totalValue: parseFloat(this.state.totalValue) * -1})
      }
    }
  }

  totalValue(value){

  }

  render(){
    return (<div className="grid-container">
      <Screen screenValue={this.state.totalValue} />
      <Boton id='allclear' valor='AC' click={this.valueFather} />
      <Boton id='clear' valor='C' click={this.valueFather} />
      <Boton id='module' valor='%' click={this.valueFather} />
      <Boton id='negPos' valor='&#8314;&#8725;&#8331;' click={this.valueFather} />
      <Boton id='num7' valor='7' click={this.valueFather} />
      <Boton id='num8' valor='8' click={this.valueFather} />
      <Boton id='num9' valor='9' click={this.valueFather} />
      <Boton id='multiply' valor='*' click={this.valueFather} />
      <Boton id='num4' valor='4' click={this.valueFather} />
      <Boton id='num5' valor='5' click={this.valueFather} />
      <Boton id='num6' valor='6' click={this.valueFather} />
      <Boton id='substract' valor='-' click={this.valueFather} />
      <Boton id='num1' valor='1' click={this.valueFather} />        
      <Boton id='num2' valor='2' click={this.valueFather} />
      <Boton id='num3' valor='3' click={this.valueFather} />
      <Boton id='add' valor='+' click={this.valueFather} />           
      <Boton id='num0' valor='0' click={this.valueFather} />      
      <Boton id='period' valor='.' click={this.valueFather} />      
      <Boton id='equals' valor='=' click={this.valueFather} />
    </div>)
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));