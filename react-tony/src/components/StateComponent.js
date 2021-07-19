import React, { useState } from 'react'

function StateComponent() {
  const [count, setCount] = useState(1);
  const [messages, setMessage] = useState({
    text: 'learn react',
    author: {
      name: 'truong',
      id: 1
    },
    users: {
      firstName: "",
      lastName: 'tony'
    }
  }) // memory A

  // function handleIncrement(value) {
  //   console.log('handleIncrement: ', value)
  //   setCount(value)
  // }

  // curry/high order function: a function return another function (clousures)
  // const handleIncrement = value => () => {
  //   setCount(value)
  // }

  function handleIncrement(value) {
    return function() {
      setCount(value)
    }
  }

  function handleDecrement(event, value) {
    console.log('decrement: ', event, value)
  }

  return (
    <div>
      state hooks: {count}
      <button type="button" onClick={handleIncrement(Date.now())}>increment</button>

      <button type="button" onClick={event => handleDecrement(event,Date.now())}>decremenet</button>
      <input 
        type="text"
        value={messages.text}
        onChange={(event) => {
          const { value } = event.target;
          // messages.text = value; // don't work

          // create a new object to work
          const newMessage = { 
            text: value
          } // memory B
        
          setMessage(newMessage) 
        }}
      />

      <br />
      <br />

      state: callback function
      FirstName: 
      <input 
        type="text"
        value={messages.firstName}
        onChange={(event) => {
          const { value } = event.target;
          // wrong 1
          // setMessage(prevState => {
          //   return {
          //     ...prevState,
          //     firstName: value
          //   }
          // })

          // wrong 2
          // setMessage(prevState => {
          //   return {
          //     ...prevState.text,
          //     ...prevState.author,
          //     firstName: value
          //   }
          // })

          // wrong 3
          // setMessage(prevState => {
          //   return {
          //     ...prevState,
          //     users: {
          //       firstName: value
          //     }
          //   }
          // })
          
          // correct
          setMessage(prevState => {
            return {
              ...prevState,
              users: {
                ...prevState.users,
                firstName: value
              }
            }
          })
        }}
      />
    </div>
  )
}

export default StateComponent