import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import SectionWhy from './container';

function Query() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const edges = data.allMarkdownRemark.edges.map(o => o.node);
        return <SectionWhy data={edges} />;
      }}
    />
  );
}

const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//data/why//" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;

export default Query;
