import React from 'react'

import { NavProvider } from './src/contexts/nav-context'
import { ThemeProvider } from 'styled-components'

import { theme } from './src/styles'

export const wrapRootElement = ({ element }) => (
  <NavProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </NavProvider>
)
