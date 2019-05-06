import React from 'react'
import c from 'classnames'
import { Link } from 'gatsby'
import './style.css'

import NavBubble1 from '../../images/nav/bubble-1.png'
import NavBubble2 from '../../images/nav/bubble-2.png'

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
      {isMobile && (
        <>
          <img className="nav-bubble-1" src={NavBubble1} alt="" width="139" />
          <img className="nav-bubble-2" src={NavBubble2} alt="" width="249" />
        </>
      )}
    </div>
  )
}

export default Navigation
