import React from 'react'
import c from 'classnames'

import './style.css'
import Icon from '../Icon'

function MobileMenuToggle({ onToggleMenu, isShow }) {
  return (
    <button
      type="button"
      onClick={onToggleMenu}
      className={c('mobile-menu-toggle', 'BtnIcon', { '--show': isShow })}
    >
      <span className="menu">
        <Icon name="menu" />
      </span>
      <span className="close">
        <Icon name="close" />
      </span>
    </button>
  )
}

export default MobileMenuToggle
