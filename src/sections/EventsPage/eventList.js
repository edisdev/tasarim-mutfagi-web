import React from 'react';
import c from 'classnames';

import './style.css';

function Photos({ photos }) {
  if (photos.length > 0) {
    return (
      <div className="photos">
        {photos.map((photo) => {
          const imgSRC = require(`../../../static/assets/all-events/${photo}`);
          return (
            <div key={photo} className="event-photo">
              <img alt={photo.replace('.jpg', '')} src={imgSRC} />
            </div>
          );
        })}
      </div>
    );
  }
  const empties = Array.from(Array(6).keys());
  return (
    <div className="photos">
      {empties.map(simulate => (
        <div key={simulate} className="event-photo simulate" />
      ))}
    </div>
  );
}

function Event({ event }) {
  const dayWithHour = `${event.day}, ${event.hour}`;
  const { isOld } = event;
  const eventClasses = c('event-item', 'col-lg-12', isOld ? 'old' : 'new');

  return (
    <div className={eventClasses}>
      <div className="left">
        <span className="status">Geçmiş Etkinlik</span>
        <h2 className="name">{event.name}</h2>
        <div className="detail">
          <div className="eventdate">
            <span className="date">{event.date}</span>
            <span className="mouth">{event.mouth}</span>
          </div>
          <div className="location">
            <span className="place">{event.place}</span>
            <span className="day">{dayWithHour}</span>
          </div>
        </div>
        <a
          className={c('Btn', 'mt-5', isOld ? 'Btn-ghost-primary' : 'Btn-ghost-white')}
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          DETAYLARI GÖRÜNTÜLE
        </a>
      </div>
      <div className="right">
        <Photos photos={event.photos} />
      </div>
    </div>
  );
}


function EventList({ list }) {
  return (
    <div className="container">
      <div className="row allEvents">
        {list.map(event => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventList;
