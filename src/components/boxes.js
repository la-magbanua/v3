import React from 'react'

import { BoxesContainer, Box, DotBox } from '../styles/boxes-styles'
import 'pattern.css/dist/pattern.css'

export const Boxes = () => {
  return (
    <BoxesContainer>
      <DotBox
        size="md"
        color="white"
        className="pattern-dots-md max-w-20pc overflow-visible"
      >
        <div></div>
      </DotBox>
      <Box size="lg" />
      <DotBox size="lg" className="pattern-dots-md max-w-20pc overflow-visible">
        <div></div>
      </DotBox>
    </BoxesContainer>
  )
}
