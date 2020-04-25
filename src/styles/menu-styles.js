import styled from 'styled-components'

export const StyledMenu = styled.div`
  position: absolute;
  right: 0;
  top: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: rotate(90deg);

  @media screen and (max-width: 380px) {
    top: 12rem;
  }
`

export const MenuLink = styled.div`
  &:first-child {
    margin-right: 40px;
  }

  a {
    display: block;
    color: ${({ theme }) => theme.colors.textColor};
  }
`
