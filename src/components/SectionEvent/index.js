import React from 'react'
import './style.css'

import EventPhoto1 from '../../images/event-photos/photo-1.jpg'
import EventPhoto2 from '../../images/event-photos/photo-2.jpg'
import EventPhoto3 from '../../images/event-photos/photo-3.jpg'
import EventPhoto4 from '../../images/event-photos/photo-4.jpg'
import EventPhoto5 from '../../images/event-photos/photo-5.jpg'
import EventPhoto6 from '../../images/event-photos/photo-6.jpg'
import EventPhoto7 from '../../images/event-photos/photo-7.jpg'
// import EventPhoto8 from '../../images/event-photos/photo-8.jpg'
import EventPhoto9 from '../../images/event-photos/photo-9.jpg'

function Event() {
  return (
    <div className="Section SectionEvent">
      <div className="container">
        <div className="row">
          {/* CONTENT */}
          <div className="col-12 col-md-6 col-lg-5 col-xl-4 SectionEvent-content">
            {/* header */}
            <h2>Etkinlikler</h2>
            <p className="desc c-gray mt-3">
              Bazen kendimiz konuşuyoruz, bazen siz. Bazen ise hepimiz geçip,
              birbirinden değerli tasarımcıları dinliyoruz ve kaynaşıyoruz.
            </p>
            {/* event card */}
            <div className="mt-5">this come here event card</div>
            {/* buttons */}
            <div className="mt-5">
              <button className="Btn Btn-primary mr-3">Tüm Etkinlikler</button>
            </div>
          </div>
          {/* PHOTOS */}
          <div className="col-md-12 offset-md-6 offset-lg-5 offset-xl-4 SectionEvent-photos">
            <div className="row">
              <div className="col-2">
                <img className="home-bubble-1" src={EventPhoto1} alt="" />
              </div>
              <div className="col-3">
                <div className="row">
                  <div className="col-12">
                    <img className="home-bubble-1" src={EventPhoto2} alt="" />
                  </div>
                  <div className="col-4">
                    <img className="home-bubble-1" src={EventPhoto3} alt="" />
                  </div>
                  <div className="col-8">
                    <img className="home-bubble-1" src={EventPhoto4} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="row">
                  <div className="col-12">
                    <img className="home-bubble-1" src={EventPhoto5} alt="" />
                  </div>
                  <div className="col-12">
                    <img className="home-bubble-1" src={EventPhoto6} alt="" />
                  </div>
                  <div className="col-12">
                    <img className="home-bubble-1" src={EventPhoto7} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="row">
                  <div className="col-12">
                    <img className="home-bubble-1" src={EventPhoto2} alt="" />
                  </div>
                  <div className="col-3">
                    <img className="home-bubble-1" src={EventPhoto9} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
