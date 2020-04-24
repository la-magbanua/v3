import React from 'react'
import { Link } from 'gatsby'

import { Wrap } from '../components'
import { StyledHeader, InnerHeader, Brand } from '../styles/header-styles'

export const Header = () => (
  <StyledHeader>
    <Wrap>
      <InnerHeader>
        <Brand>
          <Link to="/">L.A.</Link>
        </Brand>
      </InnerHeader>
    </Wrap>
  </StyledHeader>
)
