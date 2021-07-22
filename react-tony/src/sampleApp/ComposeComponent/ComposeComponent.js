import React from 'react';
import UserInfoComponent from './UserInfoComponent';
import DateComponent from './DateComponent';
import TextComponent from './TextComponent';


function ComposeComponent() {
  const comment = {
    text: 'I hope you enjoy Reactjs',
    date: new Date(),
    author: {
      name: 'Hello kitty',
      avatar: 'https://placekitten.com/g/64/64',
    }
  };
  return ( 
    <div>
      <UserInfoComponent author={comment.author} />
      <TextComponent text={comment.text} />
      <DateComponent date={comment.date} />
    </div>
  )
}

export default ComposeComponent
