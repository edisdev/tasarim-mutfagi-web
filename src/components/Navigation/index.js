import React from 'react';
import c from 'classnames';
import animateScrollTo from 'animated-scroll-to';

import './style.css';

function Navigation({
  data,
  isMobile,
  onToggle,
  path = '/',
}) {
  const go = (id) => {
    if (window.location.pathname !== path) {
      window.location.pathname = path;
    }
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
    </div>
  );
}

export default Navigation;
