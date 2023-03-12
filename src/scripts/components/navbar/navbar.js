import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import Avatar from '../avatar/avatar'
import './navbar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { asyncUnsetAuthUser } from '../../states/auth-user/action'

const Navbar = () => {
  const { authUser } = useSelector((states) => states)
  const dispatch = useDispatch()
  const location = useLocation()
  console.log(location.pathname)

  const userAvatar = authUser
    ? authUser.avatar
    : `${process.env.REACT_APP_BASE_URL}/images/unauthed-avatar.png`

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser())
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
                <button onClick={onLogout}>{<FaCaretDown />}</button>
            </div>
        </div>
  )
}

export default Navbar
