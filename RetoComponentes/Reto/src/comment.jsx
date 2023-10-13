import React, { Component } from 'react'

export default class Comment extends Component {
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
    this.setState({ comment: '', isModalOpen: false })
  }

  render() {
    return (
      <>
        <button className="btnIcon" onClick={this.handleOpenModal}>
          <box-icon name="comment" color="rgba(239,235,235,0.99)"></box-icon>
        </button>
        {this.state.isModalOpen && (
          <div className="modal">
            <div className="modalContent">
              <textarea
                value={this.state.comment}
                onChange={this.handleCommentChange}
                placeholder="Escribe tu comentario aquí"
              />
              <button onClick={this.handleAddComment}>Agregar comentario</button>
              <button onClick={this.handleCloseModal}>Cancelar</button>
            </div>
          </div>
        )}
      </>
    )
  }
}