import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoItems extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              toggleCheck={this.props.toggleCheck}
              deleteItem={this.props.deleteItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}
