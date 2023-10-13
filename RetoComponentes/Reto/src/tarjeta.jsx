import React, { Component } from 'react'
import UserInfo from './userInfo'
import Content from './content'
import Reaction from './reactions'
import Options from './options'

export default class Card extends Component {
  render() {
    return (
      <div className='Card'>
        <UserInfo/>
        <Content/>
        <Reaction/>
      </div>
    )
  }
}
