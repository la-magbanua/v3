import styled from 'styled-components'

export const StyledProjectItem = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textColor};

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`

export const ItemDetails = styled.div`
  padding: 0 4rem;

  @media screen and (max-width: 500px) {
    padding: 0 2rem;
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
  margin-top: 5rem;
  padding: 0 4rem 1rem 0;
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
    padding: 0 1.5rem 10px 0;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`
