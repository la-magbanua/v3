import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const BoxesContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  max-width: calc(100% - 15%);
  margin-top: 2rem;

  @media screen and (max-width: 500px) {
    max-width: 100%;
    width: 100%;
    margin-top: 5rem;
  }
`

export const Box = styled(motion.div)`
  position: relative;
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.colors.gradient};

  ${({ size }) =>
    size === 'lg' &&
    css`
      width: 200px;
      height: 200px;
      z-index: 2;
      right: -170px;
      box-shadow: -10px 10px 40px rgba(142, 45, 226, 0.3);

      @media screen and (max-width: 500px) {
        height: 100px;
        width: 120px;
        right: -70px;
      }
    `}
`

export const DotBox = styled(motion.div)`
  position: relative;
  width: 180px;
  height: 180px;
  z-index: 1;
  color: #8e2de2;

  ${({ size }) =>
    size === 'lg' &&
    css`
      top: -20px;
      width: 200px;
      height: 200px;

      @media screen and (max-width: 500px) {
        top: -8px;
        right: 35px;
        height: 110px;
        width: 140px;
      }
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      top: 20px;
      right: -320px;
      z-index: 3;

      @media screen and (max-width: 500px) {
        top: 10px;
        right: -160px;
        height: 100px;
        width: 120px;
      }
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => theme.colors.accentColor};
    `}
`
