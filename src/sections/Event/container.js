import React from 'react';
import './style.css';

import EventContent from './content';
import EventPhotos from './photos';

function Event({ event, photos }) {
  return (
    <div id="etkinlikler" className="Section SectionEvent">
      <div className="container">
        <div className="row">
          <EventContent event={event} />
          <EventPhotos photos={photos} />
        </div>
      </div>
    </div>
  );
}

export default Event;
