import React from 'react'
import c from 'classnames'
import { Link } from 'gatsby'

import './style.css'

function Navigation({ data, isMobile }) {
  return (
    <div className={c(isMobile ? 'NavigationMobile' : 'NavigationDesktop')}>
      <nav className="Navigation-menu">
        {data.map(link => (
          <Link className="Navigation-link" key={link.label} to={link.url}>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Navigation
