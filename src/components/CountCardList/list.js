import React from 'react'

import Card from '../CountCard'

function CountCol ({ name, label, url, count }) {
  return (
    <div className="col col-2">
      <Card name={name} label={label} url={url} count={count}/>
    </div>
  )
}

function List ({ data }) {
  return (
    <section>
      <div className="container">
        <h2>Kaç Kişiyiz?</h2>
        <div className="row">
          {data.map(account => (
            <CountCol {...account} key={account.name}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default List
