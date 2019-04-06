import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

// import CountCardList from 'components/SectionCountCard'
import SectionHero from 'components/SectionHero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SectionHero />
  </Layout>
)

export default IndexPage
