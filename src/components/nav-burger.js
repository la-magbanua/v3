import React from 'react'
import { useNav } from '../contexts/nav-context'

import { StyledNavMenu, Burger } from '../styles/nav-burger-styles'

const variants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 90,
  },
}

export const NavBurger = () => {
  const { isOpen, setIsOpen } = useNav()

  return (
    <StyledNavMenu>
      <Burger
        animate={isOpen ? 'animate' : 'initial'}
        variants={variants}
        onClick={() => setIsOpen(state => !state)}
      >
        <span></span>
        <span></span>
      </Burger>
    </StyledNavMenu>
  )
}
