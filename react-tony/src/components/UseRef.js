import React, { useRef, useState } from 'react'

function UseRef() {
  const [age, setAge] = useState(0)
  const titleRef = useRef('');
  const divRef = useRef('');

  function handleFocus() {
    titleRef.current.focus();
  }

  function onMouseOver(e) {
    console.log('e', divRef.current.clientWidth)
  }

  console.log('render: UseRef titleRef', titleRef.current.value)
  console.log('render: UseRef age', age)

  return (
    <div>
      <input ref={titleRef} />

      <input type="text" onChange={e => setAge(e.target.value)} />

      <button type="text" onClick={handleFocus}>focus</button>
      <button type="button" onClick={() => console.log('refs: ', titleRef.current.value)}>Submit</button>
      <div 
        ref={divRef} 
        onMouseOver={onMouseOver}
        style={{ width: 200, height: 200, border: '1px solid #000'}}
      >
        on hover
      </div>
    </div>
  )
}

export default UseRef
