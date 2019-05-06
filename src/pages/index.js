import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import SectionHero from 'components/SectionHero'
import SectionSlider from 'components/SectionSlider'
import SectionEvent from 'components/SectionEvent'
import SectionWhy from 'components/SectionWhy'
import SectionSupport from 'components/SectionSupport'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SectionHero />
    <SectionSlider />
    <SectionEvent />
    <SectionWhy />
    <SectionSupport />
  </Layout>
)

export default IndexPage
