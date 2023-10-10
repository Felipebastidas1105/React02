import React, { Component } from 'react'

export default class List extends Component {
  render() {
    let text = `Favorite ${this.props.type}`
    if (this.props.children instanceof Array) {
        text += 's'
    }
    return (
      <div>
        <h1>{text}</h1>
        <ul className="list-group">{this.props.children}</ul>
      </div>
    )
  }
}
