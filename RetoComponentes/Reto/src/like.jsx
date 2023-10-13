import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

export default class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmojis: false,
      selectedEmoji: null
    };
  }

  toggleEmojis = () => {
    this.setState({ showEmojis: !this.state.showEmojis });
  }

  selectEmoji = (emoji) => {
    this.setState({ selectedEmoji: emoji });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleEmojis} className='btnIcon' id='like'> 
          {this.state.selectedEmoji ? (
            <span role="img" aria-label="selected-emoji">{this.state.selectedEmoji}</span>
          ) : (
            <box-icon name='heart' color='rgba(239,235,235,0.99)'></box-icon>
          )}
        </button>
        <CSSTransition
          in={this.state.showEmojis}
          timeout={300}
          classNames="emoji-section"
          unmountOnExit
        >
          <div className="emoji-section">
            <span role="img" aria-label="thumbs-up" onClick={() => this.selectEmoji('👍')} className="emoji">👍</span>
            <span role="img" aria-label="heart-eyes" onClick={() => this.selectEmoji('😍')} className="emoji">😍</span>
            <span role="img" aria-label="clapping-hands" onClick={() => this.selectEmoji('👏')} className="emoji">👏</span>
          </div>
        </CSSTransition>
      </div>
    )
  }
}
