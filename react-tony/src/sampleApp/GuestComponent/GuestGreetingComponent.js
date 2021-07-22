import React from 'react';

function GuestGreetingComponent(props) {
  return ( 
    <div>
        <h6>{props.text}</h6>
        <button onClick={props.onClick} >Login</button>
    </div>
  )
}

export default GuestGreetingComponent;