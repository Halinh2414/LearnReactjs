import React, { useState } from 'react';
import UserGreetingComponent from './UserGreetingComponent';
import GuestGreetingComponent from './GuestGreetingComponent';

function GuestComponent() {
  const [isLogin, setIsLogin] = useState(true);
  const [text, setText] = useState('Welcome to')
  let guestComponent =  null;

  function handleToggleLogin() {
    setIsLogin(prevState => !prevState)
  }

  function handleTitle() {
    setText('xin chao')
  }

  if(isLogin) {
    guestComponent = <UserGreetingComponent text={text} name="Tony" onClick={handleToggleLogin} handleTitle={handleTitle} />
  } else {
    guestComponent = <GuestGreetingComponent text="Please sign up" onClick={handleToggleLogin} />
  }
  return ( 
    <div>
      {guestComponent}
    </div>
  )
}

export default GuestComponent;
