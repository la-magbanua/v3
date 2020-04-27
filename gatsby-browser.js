import React from 'react'
import { NavProvider } from './src/contexts/nav-context'

export const wrapRootElement = ({ element }) => (
  <NavProvider>{element}</NavProvider>
)
