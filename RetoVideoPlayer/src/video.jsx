import React from 'react';

export class Video extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className='video-container'>
        <video className='video' controls autostart autoPlay muted src={this.props.src}/>
      </div>
    );
  }
}