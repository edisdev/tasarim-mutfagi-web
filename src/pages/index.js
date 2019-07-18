import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import SectionHero from '../sections/Hero'
import SectionSlider from '../sections/Slider'
import SectionEvent from '../sections/Event'
import SectionWhy from '../sections/Why'
import SectionSupport from '../sections/Support'
import SectionSocialCount from '../sections/SocialCount'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SectionHero />
    <SectionSlider />
    <SectionEvent />
    <SectionWhy />
    <SectionSupport />
    <SectionSocialCount />
  </Layout>
)

export default IndexPage
