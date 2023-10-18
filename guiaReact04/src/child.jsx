import React, { Component } from 'react'


export default class Child extends Component {
    constructor(props){
        super(props)
        this.changeSelect = this.changeSelect.bind(this)
    }
    changeSelect(event){
        this.props.changeNombre(event.target.value)
    }
  render() {
    return (

      <div>
        <h1>Mi nombre es {this.props.name}</h1>
        <select onChange={this.changeSelect} name="" id="">
        <option value="" disabled >Seleccione una opcion</option>
        <option value="Ana">Ana</option>
        <option value="Juana">Juana</option>
        <option value="Luisa">Luisa</option>
        <option value="Alberto">Alberto</option>
        <option value="Manuel">Manuel</option>
        <option value="Alejandra">Alejandra</option>
      </select>
      </div>
      
    )
  }
}
