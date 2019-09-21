import React from 'react';

import SectionHero from 'components/SectionHero';
import SectionSlider from 'components/SectionSlider';
import SectionEvent from 'components/SectionEvent';
import SectionWhy from 'components/SectionWhy';
import SectionSupport from 'components/SectionSupport';
import SectionCommendCard from 'components/CommentCard';
import SectionEBulten from 'components/EBulten';
import SectionCountCard from 'components/SectionCountCard';
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
    <SectionCommendCard />
    <SectionEBulten />
    <SectionCountCard />
  </Layout>
);

export default IndexPage;
