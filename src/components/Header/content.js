import React, { useState } from 'react';
import c from 'classnames';
import { useScrollPosition } from 'react-use-scroll-position';

import './style.css';
import logo from '../../../static/assets/logo.svg';
import Navigation from '../Navigation';
import MobileMenuToggle from '../MobileMenuToggle';

function Header({ data }) {
  const [isShow, setShow] = useState(false);
  const { y } = useScrollPosition();

  const onToggle = () => setShow(!isShow);

  return (
    <header
      className={c(
        'Header',
        { 'mobile-menu-show': isShow },
        { 'on-scroll': y > (160 - 90) / 2 },
      )}
    >
      <div className="Header-body">
        <div className="container">
          <img src={logo} alt="Tasarım Mutfağı" />
          <MobileMenuToggle onToggle={onToggle} isActive={isShow} />
          <Navigation data={data} />
        </div>
      </div>
      <div className="Header-menu">
        <div className="container">
          <Navigation data={data} onToggle={onToggle} isMobile={isShow} />
        </div>
      </div>
    </header>
  );
}

export default Header;
