import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Container from './container';

function Query() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const event = data.allMarkdownRemark.edges[0].node;
        return <Container event={event} photos={data.allFile.edges} />;
      }}
    />
  );
}

const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//data/events//" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            url
            space
          }
        }
      }
    }
    allFile(
      filter: { absolutePath: { regex: "//event-photos//" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Query;
