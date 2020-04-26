import React from 'react'
import { Wrap, Socials } from '../components'
import { StyledFooter } from '../styles/footer-styles'

export const Footer = () => {
  return (
    <StyledFooter>
      <Wrap>
        <Socials />
        <p>Designed & Built by L.A. Magbanua</p>
      </Wrap>
    </StyledFooter>
  )
}
