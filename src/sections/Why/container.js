import React from 'react';
import './style.css';

import WhyCard from '../../components/WhyCard';

function Why({ data }) {
  return (
    <div id="neden-katilmaliyim" className="Section SectionWhy">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Neden Katılmalıyım?</h2>
            <div className="SectionWhy-list mt-5">
              <div className="row">
                {data.map(item => (
                  <div key={item.id} className="col-10 col-sm-6 col-lg-4">
                    <WhyCard {...item.frontmatter} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
