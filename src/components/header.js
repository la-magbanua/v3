import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import { Wrap, NavBurger } from '../components'

import { StyledHeader, InnerHeader, Brand } from '../styles/header-styles'
import { useNav } from '../contexts/nav-context'

export const Header = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 500 })
  const { setIsOpen } = useNav()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <StyledHeader>
      <Wrap>
        <InnerHeader>
          <Brand>
            <Link to="/" onClick={() => setIsOpen(false)}>
              L.A.
            </Link>
          </Brand>
          {isMobile && hasMounted ? <NavBurger /> : null}
        </InnerHeader>
      </Wrap>
    </StyledHeader>
  )
}
