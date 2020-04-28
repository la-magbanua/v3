import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledNavMenu = styled.nav``

export const Burger = styled(motion.button)`
  outline: none;
  border: none;
  background: transparent;
  margin: 0;

  span {
    display: block;
    width: 32px;
    height: 3px;
    background: ${({ theme, open }) =>
      open ? theme.colors.bgColor : theme.colors.textColor};

    &:last-child {
      margin-top: 8px;
    }
  }
`
