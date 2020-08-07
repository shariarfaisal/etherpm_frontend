import React,{ createContext, useState } from 'react'
import colors from './colors'


export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  return(
    <ThemeContext.Provider value={{

    }}>
      { children }
    </ThemeContext.Provider>
  )
}
export default ThemeContextProvider
