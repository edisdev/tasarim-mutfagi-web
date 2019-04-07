import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Content from './content'

function HeaderWrapper() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const edges = data.allNavigationJson.edges.map(o => o.node)
        return <Content data={edges} />
      }}
    />
  )
}

const query = graphql`
  {
    allNavigationJson {
      edges {
        node {
          id
          label
          url
        }
      }
    }
  }
`

export default HeaderWrapper
