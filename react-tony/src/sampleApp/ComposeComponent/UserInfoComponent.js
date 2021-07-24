import React from 'react';
import AvatarComponent from './AvatarComponent';

function UserInfoComponent({ author }) {
  return ( 
    <div>
        <AvatarComponent image={author.avatar}/>
        {author.name}1
    </div>
  )
}

export default UserInfoComponent;