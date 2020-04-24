import React from 'react'
import { StyledBlock, Inner } from '../styles/block-reveal-styles'

export const BlockReveal = ({ children, size, ...props }) => {
  return (
    <StyledBlock {...props}>
      <Inner size={size}>{children}</Inner>
    </StyledBlock>
  )
}
