import React from 'react'
import './style.css'

import EventContent from './content'
import EventPhotos from './photos'

function Event({ photos }) {
  return (
    <div className="Section SectionEvent">
      <div className="container">
        <div className="row">
          <EventContent />
          <EventPhotos photos={photos} />
        </div>
      </div>
    </div>
  )
}

export default Event
