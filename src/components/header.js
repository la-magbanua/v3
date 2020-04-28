import React from 'react'
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
            L.A.
          </Brand>
          <ClientOnly>
            <NavBurger />
          </ClientOnly>
        </InnerHeader>
      </Wrap>
    </StyledHeader>
  )
}
