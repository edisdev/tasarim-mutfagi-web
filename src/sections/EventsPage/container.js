import React from 'react';
import './style.css';

import EventList from './eventList';

function Events({ data }) {
  return (
    <div className="Section SectionEvents">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Etkinlikler</h1>
            <p className="desc c-gray mt-3">
              Bazen kendimiz konuşuyoruz, bazen siz.
              Bazen ise hepimiz geçip, birbirinden değerli
              <br />
              tasarımcıları dinliyoruz ve kaynaşıyoruz.
            </p>
            <a
              target="_blank"
              href="https://www.meetup.com/tasarimmutfagi"
              rel="noopener noreferrer"
              className="Btn Btn-primary mt-5"
            >
              Tüm Etkinlikleri Görüntüle
            </a>
          </div>
          <EventList list={data} />
        </div>
      </div>
    </div>
  );
}

export default Events;
