import React from 'react';
import c from 'classnames';
import animateScrollTo from 'animated-scroll-to';

import './style.css';

import NavBubble1 from '../../../static/assets/nav/bubble-1.png';
import NavBubble2 from '../../../static/assets/nav/bubble-2.png';

function Navigation({ data, isMobile, onToggle }) {
  const go = (id) => {
    animateScrollTo(document.querySelector(`#${id}`), {
      speed: 200,
      offset: -60,
    });
    if (!onToggle) return;
    onToggle();
  };

  return (
    <div className={c(isMobile ? 'NavigationMobile' : 'NavigationDesktop')}>
      <nav className="Navigation-menu">
        {data.map(link => (
          <button
            type="button"
            className="Navigation-link"
            key={link.label}
            onClick={() => go(link.url)}
          >
            {link.label}
          </button>
        ))}
      </nav>
      {isMobile && (
        <>
          <img className="nav-bubble-1" src={NavBubble1} alt="" width="139" />
          <img className="nav-bubble-2" src={NavBubble2} alt="" width="249" />
        </>
      )}
    </div>
  );
}

export default Navigation;
