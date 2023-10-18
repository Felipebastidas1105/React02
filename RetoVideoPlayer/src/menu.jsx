import React from 'react';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        const text = e.target.value
        this.props.chooseVideo(text)
    } 
  render() {
    return (
      <form onChange={this.handleClick}>
        <input type="radio" name="src" value="venado" /> Venado
        <input type="radio" name="src" value="caracol" /> Caracol
        <input type="radio" name="src" value="gato" /> Gato
        <input type="radio" name="src" value="arana" /> Araña
      </form>
    );
  }
}