import React from 'react';

import SectionHero from '../sections/Hero';
import SectionSlider from '../sections/Slider';
import SectionEvent from '../sections/Event';
import SectionWhy from '../sections/Why';
import SectionSupport from '../sections/Support';
import SectionCommendCard from '../sections/CommentCard';
import SectionEBulten from '../sections/EBulten';
import SectionSocialCount from '../sections/SocialCount';
import SEO from '../components/seo';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <SectionHero />
    <SectionSlider />
    <SectionEvent />
    <SectionWhy />
    <SectionSupport />
    <SectionCommendCard />
    <SectionEBulten />
    <SectionSocialCount />
  </Layout>
);

export default IndexPage;
