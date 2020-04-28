import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import { StyledMenu, MenuLink } from '../styles/side-menu-styles'

export const SideMenu = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 })

  if (isMobile) {
    return null
  }

  return (
    <StyledMenu>
      <MenuLink>
        <Link to="/about">About</Link>
      </MenuLink>
      <MenuLink>
        <Link to="/projects">Projects</Link>
      </MenuLink>
    </StyledMenu>
  )
}
