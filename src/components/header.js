import { Link } from 'gatsby'
import React from 'react'

const HeaderView = ({ siteTitle }) => (
  <header>
    <Link to="/">{siteTitle}</Link>
  </header>
)

export default HeaderView
