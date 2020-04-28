import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

export const BlockContainer = styled.div`
  position: relative;
  margin-top: 50px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textColor};
`

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const TextContainer = styled.div`
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  animation: ${slideUp} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;

  &:nth-of-type(2) {
    margin-top: 20px;
    animation: ${slideUp} 1s 0.18s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  }
`

export const Name = styled.h3`
  margin: 0;
  font-size: 2rem;
  padding-bottom: 0.2rem;
  text-transform: uppercase;
`

export const Job = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.xBold};
  margin-bottom: 3rem;
`

const reveal = keyframes`
  0% {
    left: 0;
    width: 0%;
  }
  50% {
    left: 0%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`

export const Reveal = styled.div`
  position: absolute;
  bottom: 0;

  p {
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-size: 1rem;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.textColor};
    margin-top: 0;
    margin-bottom: 0;
    opacity: 0;
    animation: ${fadeIn} 1s 0.7s linear forwards;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #0093e9;
    background-image: ${({ theme }) => theme.colors.gradient};
  }

  &:after {
    animation: ${reveal} 1s 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  }
`
