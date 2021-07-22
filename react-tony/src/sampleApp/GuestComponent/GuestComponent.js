import React, { useState } from 'react';
import UserGreetingComponent from './UserGreetingComponent';
import GuestGreetingComponent from './GuestGreetingComponent';

function GuestComponent() {
  const [isLogin, setIsLogin] = useState(true);
  let guestComponent =  null;
  if(isLogin) {
    guestComponent = <UserGreetingComponent text="Welcome to" name="Tony" onClick={(value) => setIsLogin(false)} />
  } else {
    guestComponent = <GuestGreetingComponent text="Please sign up" onClick={(value) => setIsLogin(true)} />
  }
  return ( 
    <div>
      {guestComponent}
    </div>
  )
}

export default GuestComponent;
