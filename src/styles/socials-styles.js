import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledSocials = styled(motion.div)`
  margin-top: 15rem;
  display: inline-block;

  @media screen and (max-width: 380px) {
    margin-top: 12rem;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-betweeen;
  align-items: center;
`

export const SocialLink = styled(motion.a)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.textColor};

  &:last-child {
    margin-left: 15px;
  }
`
