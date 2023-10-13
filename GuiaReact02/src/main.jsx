import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./NavBar"
import NavBar from './NavBar'
import Button from './Button'
import List from './List'

class Saludo extends Component {
  render() {
    return <h1>hellooo React Components</h1>
  }
}
class SaludoCompleto extends Component {
  render() {
    return (
      <div>
        <Saludo />
        <p>Como estas reina</p>
      </div>
    )
  }
}

class ProfilePage extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>All about me!!!</h1>
        <p>I like programing at SENA - CALDAS</p>
        <NavBar />
      </div>
    )
  }
}

export default class PropsDisplay extends Component {
  render() {
    const stringProps = JSON.stringify(this.props)
    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    )
  }
}

class Greetings extends Component {
  render() {
    if (this.props.signdId) {
      return (
        <div>
          <h1>Hi {this.props.name}</h1>
          <p>My age is {this.props.age}</p>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Identificate 😡😡</h1>
        </div>
      )
    }
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <h1>SENA - CPIC</h1>
        <Greetings name={this.props.completeName} signdId={false} />
      </div>
    )
  }
}
class Talker extends Component {
  hadleClick() {
    let speech = ''
    for (let i = 0; i < 10; i++) {
      speech += ' SENA - CPIC -'
    }
    alert(speech)
  }
  render() {
    return (
      <Button onClick={this.hadleClick} />
    )
  }
}
class ListItems extends Component {
  render() {
    return (
      <div>
        <List type='ADSO program'>
          <li>ADSO</li>
          <li>HSEQ</li>
        </List>
        <List type='Automa program'>
          <li>Circuitos integrados</li>
        </List>
        <List type='Cafetera program'>
          <li>Gestion agropecuaria</li>
          <li>Gestion Vacuna</li>
        </List>
      </div>
    )
  }
}
class App2 extends Component {
  constructor(props) {  //Define the constructor of the class
    super(props)  //Call the constructor of the Component class
    this.state = { name: 'Juan Felipe Bastidas Bedoya', formation: "ADSO 2497990" , Centro: "CPIC"} //Setear the state
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.name}
        </h1>
        <h2>
          {this.state.formation}&nbsp;{this.state.Centro}
        </h2>
      </div>
    )
  }
}
const green = '#39D1B4'
const orange = '#FFA500'
class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {color: green }
    this.state = this.changeColor.bind(this)
  }
  changeColor(){
    const newColor = this.state.color == green ? orange : green
    this.setState({color: newColor})
  }
  render(){
    return(
      <div style={{background: this.state.color}}>
        <h1>Change my color</h1>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    )
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SaludoCompleto /> */}
    {/* <ProfilePage /> */}
    {/* <PropsDisplay myProp = "Juan Felipe Bastidas Bedoya" saludo = "Un saludito "/> */}
    {/* <Greetings name = "Juan Felipe Bastidas Bedoya" age = "18" signdId={true}/>
    <App completeName = "Juan Felipe Bastidas Bedoya"/> */}
    {/* <Talker /> */}
    {/* <ListItems /> */}
    <App2 />
    <Toggle />
  </React.StrictMode>,
)
