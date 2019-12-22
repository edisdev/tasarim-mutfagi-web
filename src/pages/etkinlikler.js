import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';

import Index from '../sections/EventsPage';

const Events = () => (
  <Layout>
    <SEO title="Etkinlikler" keywords={['gatsby', 'application', 'react']} />
    <Index />
  </Layout>
);

export default Events;
