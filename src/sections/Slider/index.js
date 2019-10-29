import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Container from './container';

function Query() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const edges = data.allMarkdownRemark.edges.map(o => o.node);
        return <Container data={edges} />;
      }}
    />
  );
}

const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//data/slider//" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            thumbnail
            description
            button {
              text
              url
            }
          }
        }
      }
    }
  }
`;

export default Query;
