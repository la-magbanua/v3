import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

import {
  StyledProjectItem,
  Title,
  Description,
  Stack,
  StackItem,
  ProjectLinks,
  ItemDetails,
} from '../styles/project-item-styles'

export const ProjectItem = ({ project }) => {
  const { title, github_url, url, description, stack } = project

  return (
    <StyledProjectItem>
      <ItemDetails>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Stack>
          {stack.map((stack, i) => (
            <StackItem key={i}>{stack}</StackItem>
          ))}
        </Stack>
      </ItemDetails>
      <ProjectLinks>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <FiExternalLink />
        </a>
        <a href={github_url} target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
      </ProjectLinks>
    </StyledProjectItem>
  )
}
