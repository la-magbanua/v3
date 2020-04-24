import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Head, Header, Footer } from './index'

import { GlobalStyles, theme } from '../styles'

export const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <main>
          <div>{children}</div>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
