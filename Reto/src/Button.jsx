import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.light ? 'light-button button' : 'dark-button button'}
        onClick={this.props.onClick}>
        Refresh
      </button>
    );
  }
}