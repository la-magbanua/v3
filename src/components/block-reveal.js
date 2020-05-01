import React from 'react'
import {
  Reveal,
  BlockContainer,
  Name,
  Job,
  TextContainer,
  EphemeralDiv,
  EphemeralText,
} from '../styles/block-reveal-styles'

const blockVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
}

const textVariants = {
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
    },
  },
}

const ephemeralTextVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 300,
    },
  },
}

export const ephemeralDivVariant = {
  initial: {
    left: 0,
    width: '0%',
  },
  animate: {
    left: '100%',
    width: '0%',
    transition: {
      type: 'spring',
      damping: 300,
    },
  },
}

export const BlockReveal = () => {
  return (
    <BlockContainer
      initial="initial"
      animate="animate"
      variants={blockVariants}
    >
      <TextContainer>
        <Name variants={textVariants}>L.A. Magbanua</Name>
      </TextContainer>
      <TextContainer>
        <Job variants={textVariants}>Front End Developer.</Job>
      </TextContainer>
      <Reveal>
        <EphemeralDiv variants={ephemeralDivVariant}></EphemeralDiv>
        <EphemeralText variants={ephemeralTextVariant}>
          coding web stuff
        </EphemeralText>
      </Reveal>
    </BlockContainer>
  )
}
