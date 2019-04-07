import React from 'react'
import { Link } from 'gatsby'
import './style.css'

function Navigation({ data }) {
  return (
    <nav className="Navigation">
      {data.map(link => (
        <Link className="Navigation-link" key={link.label} to={link.url}>{link.label}</Link>
      ))}
    </nav>
  )
}

export default Navigation
