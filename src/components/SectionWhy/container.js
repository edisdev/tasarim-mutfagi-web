import React from 'react'
import './style.css'

import WhyCard from '../WhyCard'

function Why({ data }) {
  return (
    <div className="Section SectionWhy">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Neden Katılmalıyım?</h2>
            <div className="SectionWhy-list">
              <div className="row mt-5">
                {data.map(item => (
                  <div key={item.id} className="col-10 col-sm-6 col-lg-4">
                    <WhyCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why
