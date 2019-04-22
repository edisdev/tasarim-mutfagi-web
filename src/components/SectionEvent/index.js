import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import SectionEvent from './container'

function Query() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const photos = data.allFile.edges.map(o => o.node)
        return <SectionEvent photos={photos} />
      }}
    />
  )
}

const query = graphql`
  {
    allFile(
      filter: { absolutePath: { regex: "//event-photos//" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Query
