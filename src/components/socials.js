import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import {
  StyledSocials,
  SocialLinks,
  SocialLink,
} from '../styles/socials-styles'

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
      delayChildren: 1.2,
      staggerChildren: 0.2,
    },
  },
}

export const Socials = () => {
  return (
    <StyledSocials initial={false} animate="animate" variants={variants}>
      <SocialLinks>
        <SocialLink
          href="https://github.com/la-magbanua"
          target="_blank"
          rel="noopener noreferrer"
          variants={variants}
        >
          <FaGithub size="1.5rem" />
        </SocialLink>

        <SocialLink
          href="https://www.linkedin.com/in/lee-arnold-magbanua/"
          target="_blank"
          rel="noopener noreferrer"
          variants={variants}
        >
          <FaLinkedin size="1.5rem" />
        </SocialLink>
      </SocialLinks>
    </StyledSocials>
  )
}
