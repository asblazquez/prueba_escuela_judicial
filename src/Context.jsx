import { useState, createContext } from 'react'

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  
  const contextValue = {
    darkMode,
    setDarkMode
   }

  return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
