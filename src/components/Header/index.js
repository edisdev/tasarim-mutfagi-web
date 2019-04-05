import React from 'react'
import { Link } from 'gatsby'

function HeaderView({ siteTitle }) {
  return (
    <div>
      <Link to="/">{siteTitle}</Link>
    </div>
  )
}

export default HeaderView
