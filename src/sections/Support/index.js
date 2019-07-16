import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import SectionSupport from './container'

function Query() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const supporters = data.allMarkdownRemark.edges.map(o => o.node)
        return <SectionSupport supporters={supporters} />
      }}
    />
  )
}

const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//data/supports//" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            url
            logo
          }
        }
      }
    }
  }
`

export default Query
