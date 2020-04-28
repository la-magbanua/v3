import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Head, Header, Footer, Wrap, SideMenu, NavDrawer } from './index'

import { GlobalStyles } from '../styles'

export const Layout = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 500 })

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <>
      <Head />
      <GlobalStyles />
      <Header />
      <main>
        <Wrap>
          {children}
          {isMobile && hasMounted ? null : <SideMenu />}
        </Wrap>
      </main>
      {isMobile && hasMounted ? <NavDrawer /> : null}
      <Footer />
    </>
  )
}
