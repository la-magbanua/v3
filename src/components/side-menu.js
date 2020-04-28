import React from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import { StyledMenu, MenuLink } from '../styles/side-menu-styles'

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
}

export const SideMenu = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 })

  if (isMobile) {
    return null
  }

  return (
    <StyledMenu
      key="styledMenu"
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <MenuLink variants={variants}>
        <Link to="/about">About</Link>
      </MenuLink>
      <MenuLink variants={variants}>
        <Link to="/projects">Projects</Link>
      </MenuLink>
    </StyledMenu>
  )
}
