import React, { useState, useEffect } from 'react'

function UseEffectHook() {
  const [todos, setTodos] = useState([])

  // only run once time
  useEffect(() => {
    console.log('useEffect empty array')
    // fetch('https://tony-json-server.herokuapp.com/api/todos')
    //   .then(res => res.json())
    //   .then(res => {
    //     const newData = res.data;
    //     setTodos(newData)
    //   })
    async function fetchData() {
      // You can await here
      const res = await fetch('https://tony-json-server.herokuapp.com/api/todos');
      const data = await res.json();
      setTodos(data.data)
    }
    fetchData();
    
  }, [])

  // re-run when value changes
  useEffect(() => {
    console.log('re-run effect')
    if(todos.length > 0) {
      // something
      console.log('fetched todos')
    }

    return () => {
      console.log('clean up function')
    }
  }, [todos])

  return (
    <div>
      <h3>Todo</h3>
      <ul>
        {todos.length > 0 ? todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        )): <div>no data</div>}
      </ul>
    </div>
  )
}

export default UseEffectHook
