import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import SectionSupport from './container'

function Query() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const supporters = data.allSupportersJson.edges.map(o => o.node)
        return <SectionSupport supporters={supporters} />
      }}
    />
  )
}

const query = graphql`
  {
    allSupportersJson {
      edges {
        node {
          id
          label
          logoName
          url
        }
      }
    }
  }
`

export default Query
