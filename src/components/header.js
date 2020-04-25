import React from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import { Wrap, NavMenu } from '../components'

import { StyledHeader, InnerHeader, Brand } from '../styles/header-styles'

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  return (
    <StyledHeader>
      <Wrap>
        <InnerHeader>
          <Brand>
            <Link to="/">L.A.</Link>
          </Brand>
          {isMobile ? <NavMenu /> : null}
        </InnerHeader>
      </Wrap>
    </StyledHeader>
  )
}
