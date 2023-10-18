import React, { Component } from 'react'

export default class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      showModal: false,
      newComment: ''
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.handleAddComment = this.handleAddComment.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  handleCommentChange(e) {
    this.setState({ newComment: e.target.value })
  }

  handleAddComment() {
    const { comments, newComment } = this.state
    const newComments = [...comments, newComment]
    this.setState({ comments: newComments, newComment: '', showModal: false })
  }

  render() {
    const { comments, showModal, newComment } = this.state
    return (
      <>
        <button className="btnIcon" onClick={this.handleOpenModal}>
          <box-icon name="comment" color="#0e2e43"></box-icon>
        </button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.handleCloseModal}>&times;</span>
              <form>
                <div className="form-group">
                  <label htmlFor="comment">Agregar comentario:</label>
                  <textarea
                    className="form-control"
                    id="comment"
                    rows="3"
                    value={newComment}
                    onChange={this.handleCommentChange}
                  ></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.handleAddComment}>Enviar</button>
              </form>
            </div>
          </div>
        )}
        {comments.length > 0 && (
          <button className="btnIcon" onClick={() => alert(comments.join('\n'))}>
            <box-icon name="comment-detail" color="#0e2e43"></box-icon>
          </button>
        )}
      </>
    )
  }
}