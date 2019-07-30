import React from 'react';
import format from 'date-fns/format'
import tr from 'date-fns/locale/tr';
import Icon from '../Icon';

import './style.css';

// const event = {
//   date: 3434234,
//   title: '',
//   space: '',
//   url: ''
// }

function EventCard({ title, date, url, space }) {
  return (
    <div className="EventCard">
      <div className="EventCard-body">
        <div className="EventCard-date">
          <span className="EventCard-date-day">{format(date, 'D')}</span>
          <span className="EventCard-date-month">
            {format(date, 'MMM', { locale: tr })}
          </span>
        </div>
        <div className="EventCard-info">
          <h4 className="lh-head">{title}</h4>
          <p className="fs-small c-white-gray mt-1">{space}</p>
          <p className="fs-small c-white-gray">
            {format(date, 'dddd, D MMM YYYY, HH:mm', { locale: tr })}
          </p>
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
      >
Open new link
      </a>
    </div>
  );
}

export default EventCard;
