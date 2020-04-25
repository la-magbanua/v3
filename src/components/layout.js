import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { ThemeProvider } from 'styled-components'
import { Head, Header, Footer, Wrap, Menu } from './index'

import { GlobalStyles, theme } from '../styles'

export const Layout = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <main>
          <Wrap>
            {children}
            {isMobile ? null : <Menu />}
          </Wrap>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
