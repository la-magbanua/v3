import React from 'react'
import { Link } from 'gatsby'

import { Layout, BlockReveal } from '../components'

const IndexPage = () => (
  <Layout>
    <div style={{ position: 'relative', height: '400px' }}>
      <BlockReveal size="reg">L.A. Magbanua</BlockReveal>
      <BlockReveal size="big">Front End Developer</BlockReveal>
      {/* <BlockReveal>Focused in delivering delighful web expriences</BlockReveal> */}
    </div>
  </Layout>
)

export default IndexPage
