import React, {useState , useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

function TodoList(props) {
    const { todo } = useContext(TodoContext);

  return (
    <div>
      <ul>
        {todo.length > 0 ? todo.map((todoItem, idx)=> (
          <li key={todoItem.title}>
            Todo {idx + 1}: {todoItem.title}
          </li>
        )) : null}
      </ul>
    </div>
  )
}

export default TodoList;