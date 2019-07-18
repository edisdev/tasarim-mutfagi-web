import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import List from './list'

function Index() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const edges = data.allAccountsJson.edges
          .map(o => o.node)
          .filter(item => {
            return (
              [
                'twitter',
                'youtube',
                'meetup',
                'slack',
                'instagram',
                'newsletter'
              ].indexOf(item.name) > -1
            )
          })
        return <List data={edges} />
      }}
    />
  )
}

const query = graphql`
  {
    allAccountsJson {
      edges {
        node {
          id
          name
          label
          url
          count
        }
      }
    }
  }
`

export default Index
