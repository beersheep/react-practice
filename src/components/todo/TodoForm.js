import React from 'react';
// PropTypes has been abstract from React
import PropTypes from 'prop-types';

export const TodoForm = (props) => (
  <form onSubmit={ props.handleSubmit} >
    <input type="text" 
      value={props.currentTodo} 
      onChange={props.handleInputChange}/>
  </form>
)

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}


