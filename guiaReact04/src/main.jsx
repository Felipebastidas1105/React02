import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Child from './child'
import Sibling from './sibling'


class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "Arthur" }
    this.changeName = this.changeName.bind(this)
  }
  changeName(newName) {
    this.setState({
      name: newName
    })
  }
  render() {
    return <div>
      <Child name={this.state.name} changeNombre={this.changeName} />
      <Sibling name={this.state.name}/>
    </div>
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
)

// class Parent extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'Juan Felipe Bastidas Bedoya'
//     }
//   }
//   render(){
//     return <Child name = {this.state.name}/>
//   }
// }