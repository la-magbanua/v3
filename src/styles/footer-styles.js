import styled from 'styled-components'

export const StyledFooter = styled.footer`
  p {
    font-size: 10px;
    letter-spacing: 1.2px;
    color: ${({ theme }) => theme.colors.textColor};
    opacity: 80%;

    @media screen and (max-width: 500px) {
      font-size: 9px;
    }
  }
`
