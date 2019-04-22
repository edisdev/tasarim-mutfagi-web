import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SectionWhy from './container'

function Query() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const edges = data.allWhyJson.edges.map(o => o.node)
        return <SectionWhy data={edges} />
      }}
    />
  )
}

const query = graphql`
  {
    allWhyJson {
      edges {
        node {
          id
          title
          desc
        }
      }
    }
  }
`

export default Query
