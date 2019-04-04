import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'

import Card from './CountCard'
import { Col, Container, Row } from 'styled-bootstrap-grid'

const SectionAccountList = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;

  ${media.xs`
      overflow: scroll;
  `}
`
const CardRow = styled(Row)`
  ${media.xs`
      flex-wrap: nowrap;
  `}
`
const CardCol = styled(Col)`
  & + & {
    ${media.xs`
      margin-left: -20px;
  `}
  }
  ${media.sm`
      margin-bottom: ${p => p.theme.row.padding * 2}px
  `}
  ${media.md`
      margin-bottom: 0
  `}
`

function CountCardList() {
  return (
    <StaticQuery
      query={accountsQuery}
      render={data => {
        console.log(data.allAccountsJson.edges)
        return (
          <SectionAccountList>
            <Container>
              <h2>Kaç Kişiyiz?</h2>
              <CardRow>
                {data.allAccountsJson.edges.map(account => {
                  const { name, label, url, count } = account.node
                  return (
                    <CardCol xs={6} sm={4} lg={2} key={name}>
                      <Card name={name} label={label} url={url} count={count} />
                    </CardCol>
                  )
                })}
              </CardRow>
            </Container>
          </SectionAccountList>
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
