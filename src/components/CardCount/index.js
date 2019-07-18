import React from 'react'
import c from 'classnames'

import './style.css'

function CardCount({ name, label, count, url }) {
  return (
    <a
      className={c('CardCount', `--${name}`)}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="h3 mb-1">{count}</p>
      <p>{label}</p>
    </a>
  )
}

export default CardCount
