import React from 'react';

export class Video extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <video controls autostart autoPlay muted src={this.props.src}/>
      </div>
    );
  }
}