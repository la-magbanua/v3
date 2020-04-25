import styled from 'styled-components'

export const StyledNavMenu = styled.nav``

export const NavBurger = styled.button`
  outline: none;
  border: none;
  background: transparent;
  margin: 0;

  span {
    display: block;
    width: 32px;
    height: 3px;
    background: ${({ theme }) => theme.colors.textColor};

    &:last-child {
      margin-top: 8px;
    }
  }
`
