import React from 'react'

const todos = [
  {
    id: 1,
    text: 'Learn React',
    isDone: true
  },
  {
    id: 2,
    text: 'learn javascript',
    isDone: false
  }
]

function ListKey() {
  const myStyles = {
    fontSize: 14, 
    color: "#00f" 
  }
  return (
    <>
      <ul>
        {todos.length > 0 && todos.map((todo, idx) => {
          return (
            <li 
              key={`todo=${idx}`} 
              style={{ 
                textDecoration: todo.isDone ? 'line-through' : 'default', 
                fontSize: 14, 
                color: "#00f" 
              }}
            >
              {todo.text}
            </li>
          )
        })}
      </ul>
      <div style={myStyles}>styling css: javascript object</div>
    </>
  )
}

export default ListKey
