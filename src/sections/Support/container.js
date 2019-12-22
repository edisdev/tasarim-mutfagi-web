import React from 'react';
import './style.css';

function Event({ supporters }) {
  return (
    <div id="destekcilerimiz" className="Section SectionSupport">
      <div className="container">
        <h2>Destekçilerimiz</h2>

        <div className="SectionSupport-list mt-4">
          <div className="row">
            {supporters.map(support => (
              <div key={support.id} className="col-6 col-lg-2">
                {/* TODO: hover? */}
                <a
                  rel="noopener noreferrer"
                  className="SectionSupport-logo"
                  href={support.frontmatter.url}
                >
                  <img
                    alt={support.frontmatter.title}
                    src={support.frontmatter.logo}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
