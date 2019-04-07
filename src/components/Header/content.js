import React, { Component } from 'react'
import c from 'classnames'

import './style.css'
import logo from '../../images/logo.svg'
import Navigation from '../Navigation'
import MobileMenuToggle from '../MobileMenuToggle'

class Header extends Component {
  state = {
    isShow: false
  }

  onToggleMenu = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }

  render() {
    const { isShow } = this.state
    const { data } = this.props

    return (
      <>
        <header className={c('Header', { 'mobile-menu-show': isShow })}>
          <div className="Header-body">
            <div className="container">
              <img src={logo} alt="Tasarım Mutfağı" />
              <MobileMenuToggle
                onToggleMenu={this.onToggleMenu}
                isShow={isShow}
              />
              <Navigation data={data} />
            </div>
          </div>
          <div className="Header-menu">
            <div className="container">
              <Navigation data={data} isMobile={true} />
            </div>
          </div>
        </header>
      </>
    )
  }
}

export default Header
