import React, { Component } from 'react'
import Card from './tarjeta'

export default class Article extends Component {
  state = {
    isModalOpen: false,
    comment: '',
  }

  handleOpenModal = () => {
    console.log('Abriendo modal')
    this.setState({ isModalOpen: true })
  }

  handleCloseModal = () => {
    console.log('Cerrando modal')
    this.setState({ isModalOpen: false })
  }

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value })
  }

  handleAddComment = () => {
    console.log(`Agregando comentario: ${this.state.comment}`)
    this.setState({ comment: this.state.comment, isModalOpen: false })
  }
  render() {
    return (
        <div className="main">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <div id="comment">
            {this.state.isModalOpen && (
          <div className="modal">
            <div className="modalContent">
              <textarea
                value={this.state.comment}
                onChange={this.handleCommentChange}
                placeholder={this.state.comment}
              />
              <button onClick={this.handleAddComment}>Agregar comentario</button>
              <button onClick={this.handleCloseModal}>Cancelar</button>
            </div>
          </div>
        )}
            </div>
        </div>
    )
  }
}
