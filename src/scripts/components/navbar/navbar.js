import React from 'react'
import './navbar.scss'
import { FaCaretDown } from 'react-icons/fa'
import Avatar from '../avatar/avatar'

const Navbar = () => {
  return (
        <div className="app-navbar">
            <div className="app-navbar__title">
                <h1><span>Discuss</span>Station</h1>
            </div>
            <div className="app-navbar__avatar">
                <Avatar alt={'Avatar Illustration'}
                        width={40}
                        source={`${process.env.REACT_APP_BASE_URL}/images/avatar-example.png`} />
                <button>{<FaCaretDown />}</button>
            </div>
        </div>
  )
}

export default Navbar
