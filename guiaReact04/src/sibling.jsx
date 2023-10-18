import React, { Component } from 'react'

export default class Sibling extends Component {
  render() {
    const name = this.props.name
    return (
      <div>
        <hr />
        <h1>SIBLING Hello my name is {name}</h1>
        <h2>{name} was changed!</h2>
      </div>
    )
  }
}
