import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    height: 100%;
    font-family: 'Poppins', sans-serif;
  }

  body {
    height: 100%;
    position: relative;
    background: ${({ theme }) => theme.colors.bgColor};
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    display: flex;
    height: 100vh;
    flex-direction: column;

    @media screen and (max-width: 480px) {
      height: calc(100vh - 70px);
    }
  }

  main {
    flex: 1;
  }

  a {
    text-decoration: none;
  }
`
