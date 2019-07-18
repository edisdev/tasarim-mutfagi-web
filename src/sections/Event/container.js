import React from 'react'
import './style.css'

import EventContent from './content'
// import EventPhotos from './photos'

function Event({ event }) {
  return (
    <div className="Section SectionEvent">
      <div className="container">
        <div className="row">
          <EventContent event={event} />
          {/*<EventPhotos photos={event.photos} />*/}
        </div>
      </div>
    </div>
  )
}

export default Event
