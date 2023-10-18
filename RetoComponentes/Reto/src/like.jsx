import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

export default class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmojis: false,
      selectedEmoji: null
    };
    this.changeStats = this.changeStats.bind(this)
  }
  changeStats(){
      this.props.onClick
  }
  render() {
    return (
      <div>
        <button onClick={this.props.onClick} className='btnIcon' id='like'> 
          {this.state.selectedEmoji ? (
            <span role="img" aria-label="selected-emoji">{this.state.selectedEmoji}</span>
          ) : (
            <box-icon name='heart' color='#0e2e43'></box-icon>
          )}
        </button>
      </div>
    )
  }
}
