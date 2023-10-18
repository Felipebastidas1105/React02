import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch() {
    const searchValue = this.state.searchValue.toLowerCase()
    const cards = document.querySelectorAll('.Card')
    if(searchValue == ''){
      alert('Ingrese un valor para buscar')
      cards.forEach(card => {
        const name = card.querySelector('.name').textContent.toLowerCase()
        card.style.display = 'block'
      })
    }else{
      cards.forEach(card => {
        const name = card.querySelector('.name').textContent.toLowerCase()
        if (name.includes(searchValue)) {
          card.style.display = 'block'
        } else {
          card.style.display = 'none'
        }
      })
    }
  }

  render() {
    return (
      <div className='header'>
        <div className="container mt-3 ">
          <div className="input-group">
            <input
              type="text"
              className="form-control ml-3"
              placeholder="Buscar..."
              value={this.state.searchValue}
              onChange={(e) => this.setState({ searchValue: e.target.value })}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary m-1"
                onClick={this.handleSearch}
                type="button"
                id='btnSearch'
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}