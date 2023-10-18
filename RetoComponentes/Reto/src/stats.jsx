import React, { Component } from 'react'

export default class Stats extends Component {
  render() {
    return (
        <div className='stats'>
          <box-icon name='bar-chart' color='#0e2e43'></box-icon>
          <p>{this.props.comments} comments</p>
        </div>
    )
  }
}
