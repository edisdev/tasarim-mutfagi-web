import React from 'react'
import cn from 'classnames'

const CountCard = ({ name, label, count, url }) => (
  <a className={cn('card', `--${name}`)} href={url} target="_blank">
    <span>{count}</span>
    <span>{label}</span>
  </a>
)

export default CountCard
