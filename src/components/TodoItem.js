import React, { Component } from "react";

export default class TodoItem extends Component {
  getStyle = (callByInput) => {
    if (!this.props.item.isCompleted) return;

    if (callByInput)
      return {
        textDecoration: "line-through",
        filter: "opacity(.3)",
      };

    return {
      textDecoration: "line-through",
      pointerEvents: "none",
      filter: "opacity(.3)",
    };
  };

  isCompleted = () => this.props.item.isCompleted;

  render() {
    return (
      <div>
        <div className="listItemsContainer">
          <input
            style={this.getStyle(true)}
            onClick={this.props.toggleCheck.bind(this, this.props.item.id)}
            checked={this.isCompleted()}
            type="checkbox"
          ></input>
          <li style={this.getStyle(false)}>{this.props.item.title}</li>
          <button
            style={this.getStyle(true)}
            onClick={this.props.deleteItem.bind(this, this.props.item.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }
}
