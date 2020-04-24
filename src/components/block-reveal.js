import React from 'react'
import { StyledBlock } from '../styles/block-reveal-styles'

export const BlockReveal = ({ text, ...props }) => {
  return (
    <StyledBlock {...props}>
      <h1>{text}</h1>
    </StyledBlock>
  )
}
