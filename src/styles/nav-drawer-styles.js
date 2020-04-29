import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const StyledMobileNav = styled(motion.div)`
  background: ${({ theme }) => theme.colors.accentColor};
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 100%;
  transition: 0.3s all ease;
  z-index: ${({ theme }) => theme.zIndex.higher};
`

export const InnerMobileNav = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  padding: 4rem 1.5rem 1rem 1.5rem;
`

export const DrawerLinks = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  a {
    display: block;
    color: ${({ theme }) => theme.colors.bgColor};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 3rem;
    margin: 1.5rem 0;

    &.is-active {
      background-image: ${({ theme }) => theme.colors.gradient};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

export const DrawerSocials = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2.5rem;

  a {
    display: inline-block;
    color: ${({ theme }) => theme.colors.bgColor};

    &:first-child {
      margin-right: 20px;
    }

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`
