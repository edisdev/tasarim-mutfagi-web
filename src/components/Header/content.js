import React, { useState, useEffect } from 'react'
import c from 'classnames'

import './style.css'
import logo from '../../images/logo.svg'
import Navigation from '../Navigation'
import MobileMenuToggle from '../MobileMenuToggle'

function Header({ data }) {
  const [isShow, setShow] = useState(false)
  let scrollY = 0

  if (typeof window !== 'undefined') {
    const [bodyOffset, setBodyOffset] = useState(
      document.body.getBoundingClientRect()
    )
    const [scrollY, setScrollY] = useState(bodyOffset.top)
    console.log(scrollY)

    const listener = () => {
      setBodyOffset(document.body.getBoundingClientRect())
      setScrollY(-bodyOffset.top)
    }

    useEffect(() => {
      window.addEventListener('scroll', listener)
      return () => {
        window.removeEventListener('scroll', listener)
      }
    })
  }

  const onToggle = () => setShow(!isShow)

  return (
    <header
      className={c(
        'Header',
        { 'mobile-menu-show': isShow },
        { 'on-scroll': scrollY > (160 - 90) / 2 }
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
          <Navigation data={data} isMobile={true} />
        </div>
      </div>
    </header>
  )
}

export default Header
