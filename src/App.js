import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    todos : [
      "Get dressed",
      "Pet cat",
      "Sleep"
    ]
  }

  addNewTodo = (newTodo) => {
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  deleteTodo = (todoIndex) => {
    this.setState({todos: [
      ...this.state.todos.slice(0, todoIndex),
      ...this.state.todos.slice(todoIndex+1)
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo addNewTodo={this.addNewTodo}/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
