import React, { Component } from 'react';
import c from 'classnames';

import './style.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation';
import MobileMenuToggle from '../MobileMenuToggle';

class Header extends Component {
  state = {
    isShow: false,
    isSticky: false,
  }

  onToggle = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow,
    }));
  }

  componentWillMount() {
    window.addEventListener('scroll', () => {
      this.setState({
        isSticky: window.pageYOffset > 90,
      });
    });
  }

  render() {
    const { isShow, isSticky } = this.state;
    const { data } = this.props;

    return (
      <>
        <header className={c('Header', { 'mobile-menu-show': isShow }, { 'Header-sticky': isSticky })}>
          <div className="Header-body">
            <div className="container">
              <img src={logo} alt="Tasarım Mutfağı" />
              <MobileMenuToggle onToggle={this.onToggle} isActive={isShow} />
              <Navigation data={data} />
            </div>
          </div>
          <div className="Header-menu">
            <div className="container">
              <Navigation data={data} isMobile />
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
