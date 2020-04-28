import React from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import { Wrap, NavBurger, ClientOnly } from '../components'

import { StyledHeader, InnerHeader, Brand } from '../styles/header-styles'
import { useNav } from '../contexts/nav-context'

export const Header = () => {
  const { setIsOpen } = useNav()

  return (
    <StyledHeader>
      <Wrap>
        <InnerHeader>
          <Brand>
            <Link to="/" onClick={() => setIsOpen(false)}>
              L.A.
            </Link>
          </Brand>
          <ClientOnly>
            <NavBurger />
          </ClientOnly>
        </InnerHeader>
      </Wrap>
    </StyledHeader>
  )
}
