import React from 'react';

export default function useSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', checkSmallScreen)
    return () => {
      window.removeEventListener('resize', checkSmallScreen)
    }
  }, [])

  function checkSmallScreen() {
    setIsSmallScreen(window.innerWidth < 768)
  }

  return {
    isSmallScreen
  }
}