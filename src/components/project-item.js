import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

import 'pattern.css/dist/pattern.css'

import {
  StyledProjectItem,
  Title,
  Description,
  Stack,
  StackItem,
  ProjectLinks,
  ItemDetails,
  PatternBox,
} from '../styles/project-item-styles'

export const ProjectItem = ({ project }) => {
  const { title, github_url, url, description, stack } = project

  return (
    <StyledProjectItem>
      <PatternBox className="pattern-dots-md max-w-20pc overflow-visible">
        <div></div>
      </PatternBox>

      <ItemDetails>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Stack>
          {stack.map((stack, i) => (
            <StackItem key={i}>{stack}</StackItem>
          ))}
        </Stack>
        <ProjectLinks>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FiExternalLink />
          </a>
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
        </ProjectLinks>
      </ItemDetails>
    </StyledProjectItem>
  )
}
