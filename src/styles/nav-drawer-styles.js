import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const StyledMobileNav = styled(motion.div)`
  background: ${({ theme }) => theme.colors.bgColor};
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
  flex-direction: column;
  justify-content: space-between;

  padding: 4rem 1.5rem 1rem 1.5rem;
`

export const DrawerLinks = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  a {
    display: block;
    color: ${({ theme }) => theme.colors.textColor};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 2rem;
    margin: 1.5rem 0;

    &.is-active {
      background-color: #0093e9;
      background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

export const DrawerSocials = styled(motion.div)`
  display: flex;
  margin-bottom: 2.5rem;

  a {
    display: inline-block;
    color: ${({ theme }) => theme.colors.textColor};

    &:first-child {
      margin-right: 15px;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`
