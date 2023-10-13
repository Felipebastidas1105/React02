import React from "react";
import Button from "./Button";

export default class Random extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {color: [0, 255, 0]}
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    const colorInput = document.querySelector('input[type="color"]');
    this.setState({color: this.hexToRgb(colorInput.value)});
  }
  hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
  
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
  
    return [r,g,b];
  }
  
  handleClick() {
    this.setState({color: this.chooseColor()});
  }

	// Parte del ciclo de vida de React
  componentDidMount() {
    this.applyColor();
  }
	
	// Parte del ciclo de vida de React
  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return "rgb(" + ary.join(", ") + ")";
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }
  
  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  }

  
  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) < 127 * 3;
  }
  
  render() {
    return (
      <div>
        <h1 className={this.isLight() ? "white" : "black"}>Tu color es  {this.formatColor(this.state.color)}</h1>
        <Button light={this.isLight()} onClick={this.handleClick}/>
        <input type="color"  onChange={this.changeColor}/>
      </div>
    );
  }
  
}