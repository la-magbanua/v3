import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledSocials = styled(motion.div)`
  margin-bottom: 2rem;
  display: inline-block;
`

export const SocialLinks = styled(motion.div)`
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
