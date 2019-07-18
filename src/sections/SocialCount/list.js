import React from 'react'
import './style.css'

import CardCount from '../../components/CardCount'

function CountCol({ name, label, url, count }) {
  return (
    <div className="col col-6 col-sm-4 col-md-2">
      <CardCount name={name} label={label} url={url} count={count} />
    </div>
  )
}

function List({ data }) {
  return (
    <section className="Section SectionCount">
      <div className="container">
        <h2>Kaç Kişiyiz?</h2>
        <div className="mt-5">
          <div className="row">
            {data.map(account => (
              <CountCol {...account} key={account.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default List
