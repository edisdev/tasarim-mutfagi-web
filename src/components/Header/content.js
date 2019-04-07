import React from 'react'
import Navigation from '../Navigation'
import './style.css'
import logo from '../../images/logo.svg'

function Header({ data }) {
  return (
    <header className="Header">
      <div className="container">
        <img src={logo} alt="Tasarım Mutfağı" />
        <Navigation data={data} />
      </div>
    </header>
  )
}

export default Header
