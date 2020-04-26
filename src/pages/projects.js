import React from 'react'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import { Layout, ProjectItem } from '../components'

import {
  StyledProjectsPage,
  Projects,
  SectionTitle,
} from '../styles/pages/projects-styles'

import projects from '../data.json'

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
  return (
    <Layout>
      <StyledProjectsPage
        initial="initial"
        animate="animate"
        variants={variants}
      >
        <SectionTitle variants={variants}>Projects</SectionTitle>
        <Projects variants={variants}>
          <CarouselProvider
            naturalSlideWidth={60}
            naturalSlideHeight={30}
            totalSlides={projects.length}
          >
            <Slider className="slider">
              {projects.map((project, i) => (
                <Slide index={i} key={project.id} innerClassName="slide">
                  <ProjectItem project={project} />
                </Slide>
              ))}
            </Slider>
            <ButtonBack>
              <IoIosArrowRoundBack size="2.5rem" />
            </ButtonBack>
            <ButtonNext>
              <IoIosArrowRoundForward size="2.5rem" />
            </ButtonNext>
          </CarouselProvider>
        </Projects>
      </StyledProjectsPage>
    </Layout>
  )
}
