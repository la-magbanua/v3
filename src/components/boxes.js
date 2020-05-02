import React from 'react'

import { BoxesContainer, Box, DotBox } from '../styles/boxes-styles'
import 'pattern.css/dist/pattern.css'

const variants = {
  initial: {
    opacity: 0,
    y: 5,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      type: 'spring',
      damping: 300,
      staggerChildren: 0.2,
    },
  },
}

export const Boxes = () => {
  return (
    <BoxesContainer initial="initial" animate="animate" variants={variants}>
      <DotBox
        size="md"
        color="white"
        className="pattern-dots-md max-w-20pc overflow-visible"
        variants={variants}
      >
        <div></div>
      </DotBox>
      <Box size="lg" variants={variants} />
      <DotBox
        size="lg"
        className="pattern-dots-md max-w-20pc overflow-visible"
        variants={variants}
      >
        <div></div>
      </DotBox>
    </BoxesContainer>
  )
}
