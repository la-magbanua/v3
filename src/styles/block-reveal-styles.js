import styled, { keyframes } from 'styled-components'

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

export const StyledBlock = styled.div`
  position: absolute;
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #f1f1f1;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  }

  &:nth-of-type(1) {
    top: 40%;

    &:after {
      animation: ${reveal} 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    }
  }
  &:nth-of-type(2) {
    top: 55%;

    &:after {
      animation: ${reveal} 1.5s 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    }
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Inner = styled.span`
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  letter-spacing: 2.5px;
  opacity: 0;
  font-size: ${({ size }) => (size === 'reg' ? '2rem' : '3.1rem')};
  animation: ${fadeIn} 0.5s 0.9s linear forwards;
`
