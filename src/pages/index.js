import React from 'react';

import SectionHero from '../sections/Hero';
import SectionSlider from '../sections/Slider';
import SectionEvent from '../sections/Event';
import SectionWhy from '../sections/Why';
import SectionSupport from '../sections/Support';
// import SectionCommendCard from 'components/CommentCard';
// import SectionEBulten from 'components/EBulten';
// import SectionCountCard from 'components/SectionCountCard';
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
    <SectionSocialCount />
    {/* <SectionCommendCard /> */}
    {/* <SectionEBulten />
    <SectionCountCard /> */}
  </Layout>
);

export default IndexPage;
