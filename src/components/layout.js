import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Head, Header, Footer, Wrap } from './index'

import { GlobalStyles, theme } from '../styles'

export const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <main>
          <Wrap>{children}</Wrap>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
