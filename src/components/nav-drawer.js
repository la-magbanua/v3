import React from 'react'
import { Link } from 'gatsby'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useNav } from '../contexts/nav-context'

import {
  StyledMobileNav,
  InnerMobileNav,
  DrawerLinks,
  DrawerSocials,
} from '../styles/nav-drawer-styles'

const drawerVariants = {
  initial: {
    right: '-100%',
  },
  animate: {
    right: 0,
  },
  exit: {
    right: '-100%',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
}

const linksVariants = {
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
      delay: 0.3,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  exit: {
    right: '-100%',
  },
}

export const NavDrawer = () => {
  const { isOpen, setIsOpen } = useNav()

  return (
    <StyledMobileNav
      initial={false}
      animate={isOpen ? 'animate' : 'initial'}
      variants={drawerVariants}
    >
      <InnerMobileNav>
        <DrawerLinks
          key="links"
          animate={isOpen ? 'animate' : 'initial'}
          variants={linksVariants}
        >
          <Link
            to="/"
            activeClassName="is-active"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            activeClassName="is-active"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            activeClassName="is-active"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </DrawerLinks>
        <DrawerSocials
          key="socials"
          animate={isOpen ? 'animate' : 'initial'}
          variants={linksVariants}
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </DrawerSocials>
      </InnerMobileNav>
    </StyledMobileNav>
  )
}
