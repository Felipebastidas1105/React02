import React, { Component } from 'react'
import data from './data'
export default class Content extends Component {
  render() {
    const img = Math.floor(Math.random()*data.length)
    return (
      <div>
        <img className='imgContent' src={data[img].url} alt="imgP" />
      </div>
    )
  }
}
