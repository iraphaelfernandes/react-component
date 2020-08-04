import React, { Component } from "react";
import TodoItem from "./TodoItem";
import ProtoTypes from "prop-types";


class Todos extends Component {

  markComplete = () => {
    console.log('Hello')
  }
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}
Todos.ProtoTypes = {
  todos: ProtoTypes.array.isRequired,
  markComplete: ProtoTypes.func.isRequired,
  delTodo: ProtoTypes.func.isRequired,
};



export default Todos;
