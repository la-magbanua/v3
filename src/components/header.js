import React from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import { Wrap, NavBurger, ClientOnly } from '../components'

import { StyledHeader, InnerHeader, Brand } from '../styles/header-styles'
import { useNav } from '../contexts/nav-context'

export const Header = () => {
  const { isOpen, setIsOpen } = useNav()

  return (
    <StyledHeader>
      <Wrap>
        <InnerHeader>
          <Brand to="/" onClick={() => setIsOpen(false)} open={isOpen}>
            {/* <Link > */}
            L.A.
            {/* </Link> */}
          </Brand>
          <ClientOnly>
            <NavBurger />
          </ClientOnly>
        </InnerHeader>
      </Wrap>
    </StyledHeader>
  )
}
