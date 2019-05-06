import React from 'react'
import './style.css'

function Event({ supporters }) {
  console.log(supporters)
  return (
    <div className="Section SectionSupport">
      <div className="container">
        <h2>Destekçilerimiz</h2>

        <div className="SectionSupport-list mt-4">
          <div className="row">
            {supporters.map(support => {
              return (
                <div key={support.id} className="col-6 col-lg-2">
                  {/* TODO: hover? */}
                  <a
                    rel="noopener noreferrer"
                    className="SectionSupport-logo"
                    href={support.url}
                  >
                    <img
                      alt={support.label}
                      src={require(`../../images/supporters/${
                        support.logoName
                      }.svg`)}
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
