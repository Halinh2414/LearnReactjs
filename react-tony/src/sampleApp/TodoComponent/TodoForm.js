import React,{useState , useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';


function TodoForm(props) {
    const [name, setName] = useState('')
    const { addTodo } = useContext(TodoContext);

    return (
        <div>
        Todo: <input type="text" onChange={e => setName(e.target.value)}/> 
        <button type="button" onClick={() => addTodo(name)}>Add</button>
        </div>
    )
}

export default TodoForm;