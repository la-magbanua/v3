import styled from 'styled-components'

export const StyledProjectsPage = styled.div`
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.textColor};
`

export const Projects = styled.div`
  .carousel {
    position: relative;
    max-width: 700px;
  }

  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* carousel buttons */
  button[aria-label='previous'],
  button[aria-label='next'] {
    position: absolute;
    display: inline-flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.textColor};
    border-radius: 50%;
    transition: 0.25s all ease;

    @media screen and (max-width: 500px) {
      width: 42px;
      height: 42px;
    }
  }

  button[aria-label='previous'] {
    top: 50%;
    transform: translateY(-50%);
    left: 15px;

    @media screen and (max-width: 500px) {
      left: -15px;
    }
  }

  button[aria-label='next'] {
    top: 50%;
    transform: translateY(-50%);
    right: 15px;

    @media screen and (max-width: 500px) {
      right: -15px;
    }
  }

  button:disabled {
    opacity: 0.3;
    visibility: hidden;
  }
`
