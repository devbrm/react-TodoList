import React, { Component } from "react";
import TodoItems from "./TodoItems";

const styles = {
  fontSize: "3rem",
  textAlign: "center",
  background: "#222",
  padding: "2rem",
};

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: [
        { id: 1, title: "Talk with GF", isCompleted: true },
        { id: 2, title: "Meeting with client", isCompleted: false },
        { id: 3, title: "Talk with the boss", isCompleted: false },
        { id: 4, title: "Play video games", isCompleted: true },
        { id: 5, title: "Learn react", isCompleted: false },
        { id: 6, title: "Make a TODO app", isCompleted: true },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.match(/[_\d\s]+/gi) || this.state.input === "") return;
    const { items } = this.state;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const item = { id, title: this.state.input, isCompleted: false };
    this.setState({ items: [...items, item], input: "" });
  };

  deleteTodo = (id) => {
    const { items } = this.state;
    this.setState({ items: [...items.filter((item) => item.id !== id)] });
  };

  toggleCheck = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.map((item) => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      }),
    });
  };

  render() {
    return (
      <div>
        <h1 style={styles}>Todo List</h1>
        <form>
          <input
            placeholder="Enter the todo Item"
            value={this.state.input}
            onChange={this.handleChange}
            type="text"
            autoFocus
          ></input>
          <button onClick={this.handleSubmit} type="submit">
            Add
          </button>
        </form>
        <TodoItems
          toggleCheck={this.toggleCheck}
          deleteItem={this.deleteTodo}
          items={this.state.items}
        />
      </div>
    );
  }
}
