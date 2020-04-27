import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <meta
        name="description"
        content={data.site.siteMetadata.description}
      ></meta>
      <meta name="author" content={data.site.siteMetadata.author}></meta>
    </Helmet>
  )
}
