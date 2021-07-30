import React from 'react';
import { TodoProvider } from '../../context/TodoContext';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function TodoComponent(props) {
    return (
        <TodoProvider>
            <TodoForm />
            <TodoList />
        </TodoProvider>
    );
}

export default TodoComponent;