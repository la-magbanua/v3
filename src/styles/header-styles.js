import styled from 'styled-components'

export const StyledHeader = styled.header``

export const InnerHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
`

export const Brand = styled.div`
  a {
    font-size: 1.2rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.accentColor};
  }
`
