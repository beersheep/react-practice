import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList, Footer } from './components/todo'
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo } from './lib/todoHelpers'
import { pipe, partial } from './lib/utils'

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Workout', isComplete: false},
      {id: 2, name: 'Build API', isComplete: false},
      {id: 3, name: 'Learn React', isComplete: true}
    ],
    currentTodo: ''
  }

  handleInputChange = (event) => {
    this.setState({ currentTodo: event.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newId = generateId()
    const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false }
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = getUpdatedTodos(id, this.state.todos)

    this.setState({ todos: updatedTodos })
  }

  handleInvalidSubmit = (e) => {
    e.preventDefault()
    this.setState({
      errorMessage: 'Todo name is required'
    })
  }

  handleRemove = (id, e) => {
    e.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({todos: updatedTodos})
  }

  render() {
    const SubmitHandler = this.state.currentTodo ? this.handleSubmit.bind(this) : this.handleInvalidSubmit.bind(this)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todo</h1>
        </header>
        <div className="Todo-App">
          { this.state.errorMessage && <span className="error"> { this.state.errorMessage } </span> } 
          <TodoForm 
            handleInputChange = { this.handleInputChange.bind(this) }
            currentTodo = { this.state.currentTodo }
            handleSubmit = { SubmitHandler }
          />
          <TodoList todos = { this.state.todos } 
            handleToggle={ this.handleToggle }
            handleRemove={ this.handleRemove }/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
