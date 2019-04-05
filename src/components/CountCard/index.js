import React from 'react'
import c from 'classnames'

function CountCard({ name, label, count, url }) {
  return (
    <a
      className={c('card', `--${name}`)}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{count}</span>
      <span>{label}</span>
    </a>
  )
}

export default CountCard
