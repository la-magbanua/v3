import React from 'react'
import {
  Reveal,
  BlockContainer,
  Name,
  Job,
  TextContainer,
} from '../styles/block-reveal-styles'

const variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 300,
      staggerChildren: 0.2,
    },
  },
}

export const BlockReveal = () => {
  return (
    <BlockContainer initial="initial" animate="animate" variants={variants}>
      <TextContainer>
        <Name variants={variants}>L.A. Magbanua</Name>
      </TextContainer>
      <TextContainer>
        <Job variants={variants}>Front End Developer.</Job>
      </TextContainer>
      <Reveal>
        <p>coding web stuff</p>
      </Reveal>
    </BlockContainer>
  )
}
