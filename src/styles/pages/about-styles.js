import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledAboutPage = styled.div`
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.textColor};
`

export const Section = styled.div`
  &:not(:first-child) {
    margin-top: 2rem;
  }
`

export const SectionTitle = styled(motion.h1)``

export const AboutDescription = styled(motion.p)`
  line-height: 24px;
  max-width: 500px;
  opacity: 80%;
`

export const Skills = styled.div`
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 120px));
  grid-gap: 10px;
`

export const SkillItem = styled.span`
  display: inline-flex;
  font-size: 12px;
  opacity: 80%;
`
