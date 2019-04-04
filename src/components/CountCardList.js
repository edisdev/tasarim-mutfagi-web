import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'

import Card from './CountCard'
import { Col, Container, Row } from 'styled-bootstrap-grid'

function CountCardList() {
  return (
    <StaticQuery
      query={accountsQuery}
      render={data => {
        console.log(data.allAccountsJson.edges)
        return (
          <Container>
            <Row>
              {data.allAccountsJson.edges.map(account => {
                const { name, label, url, count } = account.node
                return (
                  <Col xs={6} sm={2}>
                    <Card name={name} label={label} url={url} count={count} />
                  </Col>
                )
              })}
            </Row>
          </Container>
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
