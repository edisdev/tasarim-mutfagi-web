import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import CardList from './list';

function Index() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const edges = data.allAccountsJson.edges.map(o => o.node);
        return <CardList data={edges} />;
      }}
    />
  );
}

const query = graphql`
  {
    allAccountsJson {
      edges {
        node {
          id
          name
          label
          url
          count
        }
      }
    }
  }
`;

export default Index;
