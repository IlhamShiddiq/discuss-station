import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import Avatar from '../../avatar/avatar'
import './navbar.scss'
import { useSelector } from 'react-redux'
import NavbarMenu from '../navbar-menu/navbar-menu'

const Navbar = () => {
  const { authUser, navigations } = useSelector((states) => states)
  const [showMenu, setShowMenu] = useState(false)

  const userAvatar = authUser
    ? authUser.avatar
    : `${process.env.REACT_APP_BASE_URL}/images/unauthed-avatar.png`

  const onMenuClick = () => {
    setShowMenu((prevState) => {
      return !prevState
    })
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  return (
        <div className="app-navbar">
            <div className="app-navbar__title">
                <h1><span>Discuss</span>Station</h1>
            </div>
            <div className="app-navbar__avatar">
                <Avatar alt={'Avatar Illustration'}
                        width={40}
                        source={userAvatar} />
                <button onClick={onMenuClick}>{<FaCaretDown />}</button>
            </div>
            {
                showMenu ? <NavbarMenu items={navigations} hideMenuHandler={hideMenu} /> : ''
            }
        </div>
  )
}

export default Navbar
