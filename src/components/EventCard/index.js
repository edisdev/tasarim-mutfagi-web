import React from 'react'
import Icon from '../Icon'

import './style.css'

function EventCard() {
  return (
    <div className="EventCard">
      <div className="EventCard-body">
        <div className="EventCard-date">
          <span className="EventCard-date-day">20</span>
          <span className="EventCard-date-month">MAR</span>
        </div>
        <div className="EventCard-info">
          <h4>Mockup Zone</h4>
          <p className="fs-small c-gray">Kollektif House</p>
          <p className="fs-small c-gray">Salı, 20 Mart 2018, 18:00</p>
        </div>
        <div className="EventCard-arrow">
          <Icon name="right" />
        </div>
      </div>
      <a
        className="EventCard-link text-hide"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >Open new link</a>
    </div>
  )
}

export default EventCard
