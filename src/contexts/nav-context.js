import React, { useState, useContext, createContext } from 'react'

const NavContext = createContext()

const NavProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  )
}

const useNav = () => {
  const context = useContext(NavContext)
  return context
}

export { NavProvider, useNav }
