import React from 'react';
import ReactDOM from 'react-dom/client';

import { Video } from './video';
import { Menu } from './menu';

const VIDEOS = {
  venado: 'https://bit.ly/3TjD5PQ',
  caracol: 'https://bit.ly/3SdE6aD',
  gato: 'https://bit.ly/3MHpq2t',
  arana: 'https://bit.ly/3CGIw46'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.venado};
    this.chooseVideo = this.chooseVideo.bind(this);
  }
  chooseVideo(newVideo){
    this.setState({src: VIDEOS[newVideo]})
  }
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);