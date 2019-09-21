import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import './style.css';

import Content from './content';

function FooterWrapper() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const edges = data.allFooterJson.edges.map(o => o.node);
        return <Content edges={edges} />;
      }}
    />
  );
}

const query = graphql`
  {
    allFooterJson {
      edges {
        node {
          id
          name
          label
          url
        }
      }
    }
  }
`;

export default FooterWrapper;
