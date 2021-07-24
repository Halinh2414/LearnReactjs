import React from 'react';
import AvatarComponent from './AvatarComponent';

function UserInfoComponent({ author }) {
  return ( 
    <div>
        <AvatarComponent image={author.avatar}/>
        {author.name}
    </div>
  )
}

export default UserInfoComponent;