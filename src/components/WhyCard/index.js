import React from 'react';

import './style.css';

function WhyCard({ title, description }) {
  return (
    <div className="WhyCard">
      <h4 className="WhyCard-title">{title}</h4>
      <p className="WhyCard-desc fs-small">{description}</p>
    </div>
  );
}

export default WhyCard;
