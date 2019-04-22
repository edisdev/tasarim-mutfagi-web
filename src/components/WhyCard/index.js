import React from 'react'

import './style.css'

function WhyCard({ title, desc }) {
  return (
    <div className="WhyCard">
      <h4 className="WhyCard-title">{title}</h4>
      <p className="WhyCard-desc fs-small">{desc}</p>
    </div>
  )
}

export default WhyCard
