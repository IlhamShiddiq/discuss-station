import React, { useEffect } from 'react'
import LeaderboardWrapper from '../components/leaderboard/leaderboard-wrapper/leaderboard-wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveLeaderBoards } from '../states/leaderboards/action'
import { setNavigationActionCreator } from '../states/navigations/action'
import { useNavigate } from 'react-router-dom'
import { asyncUnsetAuthUser } from '../states/auth-user/action'

const LeaderboardPage = () => {
  const { authUser, leaderboards } = useSelector((states) => states)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setNavigationActionCreator([
      { label: 'Home', onClickHandler: navigateToHome },
      { label: authUser ? 'Signout' : 'Login', onClickHandler: authUser ? signOutHandler : navigateToLogin }
    ]))
  }, [authUser])

  useEffect(() => {
    dispatch(asyncReceiveLeaderBoards())
  }, [dispatch])

  const navigateToHome = () => {
    navigate('/')
  }

  const navigateToLogin = () => {
    navigate('/login')
  }

  const signOutHandler = () => {
    dispatch(asyncUnsetAuthUser())
  }

  return (
    (leaderboards.length === 0) ? null : <LeaderboardWrapper leaderboards={leaderboards} />
  )
}

export default LeaderboardPage
