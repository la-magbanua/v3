import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

export const StyledMenu = styled.div`
  position: absolute;
  right: 0;
  top: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: rotate(90deg);

  @media screen and (max-width: 380px) {
    top: 12rem;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(90px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const MenuLink = styled.div`
  opacity: 0;
  margin-right: 30px;
  transition: 0.25s all ease;
  animation: ${fadeIn} 1s 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;

  &:last-child {
    animation: ${fadeIn} 1s 1.1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  }

  a {
    display: block;
    color: ${({ theme }) => theme.colors.textColor};
  }
`
