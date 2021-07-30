import { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([{title:'learn React'}])

  function addTodo(name) {
    const newTodo = {
      title: name
    }
    setTodo(prevState => [...prevState, newTodo])
  }

  return (
    <TodoContext.Provider
      value={{
        todo,
        addTodo     
    }}
    >
      { children }
    </TodoContext.Provider>
  )
}