import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Card from './CountCard'

function CountCardList() {
  return (
    <StaticQuery
      query={accountsQuery}
      render={data => {
        return (
          <section>
            <div className="container">
              <h2>Kaç Kişiyiz?</h2>
              <div className="row">
                {data.allAccountsJson.edges.map(account => {
                  const { name, label, url, count } = account.node
                  return (
                    <div className="col col-2" key={name}>
                      <Card name={name} label={label} url={url} count={count} />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

const accountsQuery = graphql`
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

export default CountCardList
