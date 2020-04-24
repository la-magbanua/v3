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
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  a {
    text-decoration: none;
  }
`
