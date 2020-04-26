import React, { useState } from 'react'
import { Layout } from '../components'

import {
  StyledAboutPage,
  Section,
  AboutDescription,
  Skills,
  SkillItem,
} from '../styles/pages/about-styles'

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
      <StyledAboutPage>
        <Section>
          <h1>About Me</h1>
          <AboutDescription>
            I'm a front end developer based in the Philippines. Focused on
            delivering delighful & functional web experiences. I mainly use
            JavaScript and React.
          </AboutDescription>
        </Section>
        <Section>
          <h3>Skills</h3>
          <Skills>
            {skills.map(({ id, skill }) => (
              <SkillItem key={id}>{skill}</SkillItem>
            ))}
          </Skills>
        </Section>
      </StyledAboutPage>
    </Layout>
  )
}
