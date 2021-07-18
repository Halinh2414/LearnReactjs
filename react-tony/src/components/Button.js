import React from 'react'

export default function Button(props) {
  return (
    <div>
      this is button components: {props.name}
      <button type="button">{props.text}</button>
    </div>
  )
}
