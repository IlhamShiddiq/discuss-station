import React from 'react'
import './navbar-item.scss'
import PropTypes from 'prop-types'

const NavbarItem = ({ label, onClickHandler, hideMenuHandler }) => {
  const onClick = () => {
    onClickHandler()
    hideMenuHandler()
  }

  return (
        <div className="app-navbar-item">
            <button onClick={onClick}>{label}</button>
        </div>
  )
}

NavbarItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  hideMenuHandler: PropTypes.func.isRequired
}

export default NavbarItem
