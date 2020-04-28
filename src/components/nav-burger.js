import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNav } from '../contexts/nav-context'

import { StyledNavMenu, Burger } from '../styles/nav-burger-styles'

const navVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}

const burgerVariants = {
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
    <StyledNavMenu initial="hidden" animate="show" variants={navVariants}>
      <Burger
        open={isOpen}
        animate={isOpen ? 'animate' : 'initial'}
        variants={burgerVariants}
        onClick={() => setIsOpen(state => !state)}
      >
        <span></span>
        <span></span>
      </Burger>
    </StyledNavMenu>
  )
}
