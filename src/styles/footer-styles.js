import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.textColor};

    @media screen and (max-width: 500px) {
      font-size: 9px;
    }
  }
`
