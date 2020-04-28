import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
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
  const isMobile = useMediaQuery({ maxWidth: 500 })
  const { isOpen, setIsOpen } = useNav()

  if (!isMobile) {
    return null
  }

  return (
    <StyledNavMenu>
      <Burger
        open={isOpen}
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
