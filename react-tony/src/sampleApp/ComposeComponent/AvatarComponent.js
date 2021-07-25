import React from 'react';

function AvatarComponent(props) {
  return ( 
    <>
      <img src={props.image} title="Avatar" alt="Avatar" />
      <br/>
    </>
  )
}

export default AvatarComponent;

