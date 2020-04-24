import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}
