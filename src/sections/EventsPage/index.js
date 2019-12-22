import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import EventContainer from './container';

function Query() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const edges = data.allEventsJson.nodes;
        return <EventContainer data={edges} />;
      }}
    />
  );
}

const query = graphql`
  {
    allEventsJson {
      nodes {
        id
        name
        place
        photos
        date
        day
        hour
        isOld
        link
        mouth
      }
    }
  }
`;

export default Query;
