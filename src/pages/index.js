import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import SectionHero from 'components/SectionHero'
import SectionSlider from 'components/SectionSlider'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SectionHero />
    <SectionSlider />
  </Layout>
)

export default IndexPage
