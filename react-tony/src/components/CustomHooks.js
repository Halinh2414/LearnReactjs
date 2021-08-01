import React from 'react'

//custom hooks
import useSmallScreen  from 'hooks/useSmallScreen';

function CustomHooks() {
  const { isSmallScreen } = useSmallScreen();

  return (
    <div>
      This is screen: <h1>{isSmallScreen ? "small" : "large"}</h1>
    </div>
  )
}

export default CustomHooks
