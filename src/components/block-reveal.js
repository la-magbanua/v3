import React from 'react'
import {
  Reveal,
  BlockContainer,
  Name,
  Job,
  TextContainer,
} from '../styles/block-reveal-styles'

export const BlockReveal = () => {
  return (
    <BlockContainer>
      <TextContainer>
        <Name>L.A. Magbanua</Name>
      </TextContainer>
      <TextContainer>
        <Job>Front End Developer.</Job>
      </TextContainer>
      <Reveal>
        <p>coding web stuff</p>
      </Reveal>
    </BlockContainer>
  )
}
