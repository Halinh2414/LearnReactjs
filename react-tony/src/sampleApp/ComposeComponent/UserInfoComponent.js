import React from 'react';
import AvatarComponent from './AvatarComponent';

function UserInfoComponent(props) {
  return ( 
    <div>
        <AvatarComponent image={props.author.avatar}/>
        {props.author.name}
    </div>
  )
}

export default UserInfoComponent;