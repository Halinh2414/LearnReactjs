import React, { useState } from 'react'

function LoginComponent() {
  return (
    <div>
      logined
    </div>
  )
}

function LogoutComponent() {
  return (
    <div>
      logout
    </div>
  )
}

function ConditionalRendering() {
  const [isAuth, setIsAuth] = useState(true)

  let authComponent =  null;
  if(isAuth) {
    authComponent = <LogoutComponent />
  } else {
    authComponent = <LoginComponent />
  }
  
  return (
    <div>
      <h3>Inline && operators </h3>
      {isAuth && <div>logined</div>}

      <h3>inline if else</h3>
      {isAuth ? <LogoutComponent /> : <LoginComponent />}

      <h3>Element Variable</h3>
      {authComponent}

      <button type="button" onClick={() => setIsAuth(!isAuth)}>Submit</button>
    </div>
  )
}

export default ConditionalRendering

// isAuth: true -> !isAuth = false -> !!isAuth = true -> !!!isAuth = false
