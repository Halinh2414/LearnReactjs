import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme] = useState('LIGHT')

  return (
    <AppContext.Provider
      value={{
        theme
      }}
    >
      { children }
    </AppContext.Provider>
  )
}