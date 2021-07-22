import React from 'react';

function UserGreetingComponent(props) {
  return (  
    <div>
        <h6>{props.text}, {props.name}</h6>
        <button onClick={props.onClick}>Logout</button>
    </div>
  )
}

export default UserGreetingComponent;