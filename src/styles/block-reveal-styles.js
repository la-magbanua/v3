import styled from 'styled-components'

export const StyledBlock = styled.div`
  top: 50%;
  left: 50%;
  padding: 1rem 1.5rem;
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  position: absolute;
  color: #f1f1f1;
  transform: translate(-50%, -50%);

  h1 {
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: 2.5px;
    opacity: 0;
    animation: inner-reveal 0.5s 0.9s linear forwards;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    animation: block-reveal 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  }

  @keyframes block-reveal {
    0% {
      left: 0;
      width: 0%;
    }
    50% {
      left: 0%;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 0%;
    }
  }

  @keyframes inner-reveal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
