import React from 'react';

function AvatarComponent(props) {
  return ( 
    <div>
        <img src={props.image} />
    </div>
  )
}

export default AvatarComponent;