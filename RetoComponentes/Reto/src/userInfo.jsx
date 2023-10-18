import React, { Component } from 'react'
import Options from './options'
import data from './data'
import names from './names'

export default class UserInfo extends Component {

  render() {
    const img = Math.floor(Math.random()*data.length)
    const ramdonName = Math.floor(Math.random()*names.length)
    return (
      <div className='UserInfo'>
        <div className="Info">
            <img src={data[img].url} className='FotoPerfil' alt="logo" />
            <div className="datos">
            <p className="name">{names[ramdonName].profileName}</p>
            <p className="date">11 septiembre 2023</p>
            </div>
            <Options/>
        </div>
        <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi laborum tempora dolorem quidem quisquam voluptatum explicabo ducimus reiciendis eveniet velit deleniti dicta a, tenetur quos magni aut illo facilis.
        </div>
      </div>
    )
  }
}
