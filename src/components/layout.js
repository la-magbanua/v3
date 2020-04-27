import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { ThemeProvider } from 'styled-components'
import { Head, Header, Footer, Wrap, SideMenu, NavDrawer } from './index'

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
            {isMobile ? null : <SideMenu />}
          </Wrap>
        </main>
        {isMobile ? <NavDrawer /> : null}
        <Footer />
      </ThemeProvider>
    </>
  )
}
