import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledMenu = styled(motion.div)`
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

export const MenuLink = styled(motion.div)`
  margin-right: 30px;

  a {
    display: block;
    color: ${({ theme }) => theme.colors.textColor};
  }
`
