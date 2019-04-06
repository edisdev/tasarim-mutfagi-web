import React from 'react'
import c from 'classnames'

function CountCard({ name, label, count, url }) {
  return (
    <a
      className={c('CountCard', `--${name}`)}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="h4 mb-1">{count}</p>
      <p>{label}</p>
    </a>
  )
}

export default CountCard
