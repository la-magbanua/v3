import React, { useState } from 'react'
import { Layout } from '../components'

import {
  StyledAboutPage,
  Section,
  SectionTitle,
  SubsectionTitle,
  AboutDescription,
  Skills,
  SkillItem,
} from '../styles/pages/about-styles'

const variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 300,
      staggerChildren: 0.2,
    },
  },
}

export default () => {
  const [skills] = useState([
    { id: 1, skill: 'JavaScript (ES6)' },
    { id: 2, skill: 'React' },
    { id: 3, skill: 'Redux' },
    { id: 4, skill: 'Gatsby' },
    { id: 5, skill: 'Next' },
    { id: 6, skill: 'Styled Components' },
    { id: 7, skill: 'SASS' },
    { id: 8, skill: 'Express' },
  ])

  return (
    <Layout>
      <StyledAboutPage initial="initial" animate="animate" variants={variants}>
        <Section>
          <SectionTitle variants={variants}>About Me</SectionTitle>
          <AboutDescription variants={variants}>
            I'm a front end developer based in the Philippines. Focused on
            delivering delighful & functional web experiences. I mainly use
            JavaScript and React.
          </AboutDescription>
        </Section>
        <Section>
          <SubsectionTitle variants={variants}>Skills</SubsectionTitle>
          <Skills variants={variants}>
            {skills.map(({ id, skill }) => (
              <SkillItem key={id}>{skill}</SkillItem>
            ))}
          </Skills>
        </Section>
      </StyledAboutPage>
    </Layout>
  )
}
