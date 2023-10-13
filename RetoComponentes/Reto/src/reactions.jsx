import React, { Component } from 'react'
import Like from './like'
import Share from './share'
import Stats from './stats'
import Comment from './comment'

export default class Reaction extends Component {
  render() {
    return (
      <div className='reactions'>
        <Like/>
        <Comment/>
        <Share/>
        <Stats/>
      </div>
    )
  }
}
