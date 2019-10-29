import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import CardList from './list';

function Index() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const edges = data.allCommendJson.edges.map(o => o.node);
        return <CardList data={edges} />;
      }}
    />
  );
}

const query = graphql`
  {
    allCommendJson {
      edges {
        node {
          id
          who
          who_title
          who_photo
          comment
        }
      }
    }
  }
`;

export default Index;
