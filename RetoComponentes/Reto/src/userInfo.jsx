import React, { Component } from 'react'
import Options from './options'

export default class UserInfo extends Component {
  render() {
    return (
      <div className='UserInfo'>
        <div className="Info">
            <img src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg" className='FotoPerfil' alt="logo" />
            <div className="datos">
            <p className="name">Alisson Beker</p>
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
