import React, { Component } from "react";
import ProtoTypes from "prop-types";
import Todos from "./Todos";


export default class TodoItem extends Component {
  getStlyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: 'Line-through'
    //   }
    // }
    // else {
    //   return {
    //     textDecoration: 'none'
    //   }
    // }
  }

  render() {
    const { id, title } = this.props.todo; //instead this.props.todo.title
    return (
      <div style={this.getStlyle()}>
        <p>
          <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}
          /> {''}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    );
  }
}

TodoItem.ProtoTypes = {
  todos: ProtoTypes.object.isRequired
};

const btnStyle = {
  background: '#ff00000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
}