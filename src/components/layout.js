import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Head, Header, Footer, Wrap, SideMenu, NavDrawer } from './index'

import { GlobalStyles } from '../styles'

export const Layout = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 })

  return (
    <>
      <Head />
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
    </>
  )
}
