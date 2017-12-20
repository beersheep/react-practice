import React from 'react';
import { TodoItem } from './TodoItem'
import PropTypes from 'prop-types';

export const TodoList = (props) => {
  return (<div className="Todo-List">
    { props.todos.map(todo => <TodoItem key={todo.id} handleToggle={props.handleToggle} {...todo} handleRemove={props.handleRemove} />) }
  </div>)
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

