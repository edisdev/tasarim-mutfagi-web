import React from 'react'
import c from 'classnames'
import PropTypes from 'prop-types'

import './style.css'
import Icon from '../Icon'

function MobileMenuToggle({ isActive, onToggle }) {
  return (
    <button
      tabIndex="-1"
      type="button"
      onClick={onToggle}
      className={c('mobile-menu-toggle', 'BtnIcon', { '--active': isActive })}
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

MobileMenuToggle.propTypes = {
  onToggle: PropTypes.func,
  isActive: PropTypes.bool
}

MobileMenuToggle.defaultProps = {
  onToggle: () => {},
  isActive: false
}

export default MobileMenuToggle
