import React, { useState, useEffect } from 'react'
import {
  Head,
  Header,
  Footer,
  Wrap,
  SideMenu,
  NavDrawer,
  ClientOnly,
} from './index'

import { GlobalStyles } from '../styles'

export const Layout = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

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
          <ClientOnly>
            <SideMenu />
          </ClientOnly>
        </Wrap>
      </main>
      <NavDrawer />
      <Footer />
    </>
  )
}
