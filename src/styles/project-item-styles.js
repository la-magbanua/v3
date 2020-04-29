import styled from 'styled-components'

export const StyledProjectItem = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textColor};
  position: relative;
  /* background: coral; */

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`

export const PatternBox = styled.div`
  position: absolute;
  display: block;
  width: 150px;
  height: 150px;
  top: 0;
  left: 0;

  div {
    position: relative;
    left: 25px;
    top: 25px;
    width: 500px;
    height: 220px;
    background: ${({ theme }) => theme.colors.gradient};
  }

  @media screen and (max-width: 500px) {
    top: 10px;
    left: 10px;

    div {
      width: 300px;
      left: 25px;
    }
  }
`

export const ItemDetails = styled.div`
  padding: 0 4rem;
  z-index: 9;

  @media screen and (max-width: 500px) {
    padding: 0 4rem;
    margin-top: 2rem;
  }
`

export const Title = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`

export const Description = styled.p`
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`

export const Stack = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    margin-bottom: 10px;
  }
`

export const StackItem = styled.span`
  display: inline-flex;
  border: 1px solid ${({ theme }) => theme.colors.textColor80};
  opacity: 80%;
  font-size: 12px;
  padding: 4px 8px;

  &:not(last-child) {
    margin-right: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 11px;
    padding: 2px 4px;
  }
`

export const ProjectLinks = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.textColor};
    opacity: 80%;
    transition: 0.25s all ease;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &:hover {
      opacity: 100%;
    }
  }

  svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  @media screen and (max-width: 500px) {
    margin-top: 0;
    padding: 0;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`
