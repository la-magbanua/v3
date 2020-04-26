import React from 'react'
import { Link } from 'gatsby'

import { StyledMenu, MenuLink } from '../styles/side-menu-styles'

export const SideMenu = () => {
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
