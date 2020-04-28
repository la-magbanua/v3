import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledHeader = styled.header`
  z-index: ${({ theme }) => theme.zIndex.highest};
`

export const InnerHeader = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Brand = styled(Link)`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme, open }) =>
    open ? theme.colors.bgColor : theme.colors.accentColor};
`
