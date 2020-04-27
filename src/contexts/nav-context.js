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
  if (context === undefined) {
    throw new Error('useNav should be used inside NavProvider')
  }
  return context
}

export { NavProvider, useNav }
