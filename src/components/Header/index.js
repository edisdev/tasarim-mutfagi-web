import React from 'react'
import { Link } from 'gatsby'

function HeaderView({ siteTitle }) {
  return (
    <header className="Header">
      <Link to="/">{siteTitle}</Link>
    </header>
  )
}

export default HeaderView
