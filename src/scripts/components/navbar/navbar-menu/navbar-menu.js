import React from 'react'
import './navbar-menu.scss'
import NavbarItem from '../navbar-item/navbar-item'
import PropTypes from 'prop-types'
import { rand } from '../../../utils/string-format'

const NavbarMenu = ({ items, hideMenuHandler }) => {
  return (
      <div className="app-navbar-menu">
          {
              items.map((item) => <NavbarItem key={rand()} label={item.label} onClickHandler={item.onClickHandler} hideMenuHandler={hideMenuHandler} />)
          }
      </div>
  )
}

NavbarMenu.propTypes = {
  items: PropTypes.array.isRequired,
  hideMenuHandler: PropTypes.array.isRequired
}

export default NavbarMenu
