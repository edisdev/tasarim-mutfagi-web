import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import CountCardList from 'components/CountCardList'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <CountCardList />
  </Layout>
)

export default IndexPage
