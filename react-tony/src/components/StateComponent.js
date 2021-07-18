import React, { useState } from 'react'

function StateComponent() {
  const [count, setCount] = useState(1);

  console.log('render state component')

  function handleIncrement() {
    setCount(count + 1)
  }

  return (
    <div>
      state hooks: {count}
      <button type="button" onClick={handleIncrement}>increment</button>
    </div>
  )
}

export default StateComponent
