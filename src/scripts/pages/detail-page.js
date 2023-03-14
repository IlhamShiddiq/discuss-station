import React, { useEffect } from 'react'
import DiscussionDetailWrapper from '../components/discussion/discussion-detail-wrapper/discussion-detail-wrapper'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveThreadDetail } from '../states/thread-detail/action'
import { setNavigationActionCreator } from '../states/navigations/action'
import { asyncUnsetAuthUser } from '../states/auth-user/action'

const DetailPage = () => {
  const { id } = useParams()
  const {
    authUser,
    threadDetail
  } = useSelector((states) => states)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setNavigationActionCreator([
      { label: 'Home', onClickHandler: navigateToHome },
      { label: 'Leaderboards', onClickHandler: navigateToLeaderboards },
      { label: authUser ? 'Signout' : 'Login', onClickHandler: authUser ? signOutHandler : navigateToLogin }
    ]))
  }, [authUser])

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  const navigateToHome = () => {
    navigate('/')
  }

  const navigateToLeaderboards = () => {
    navigate('/leaderboard')
  }

  const navigateToLogin = () => {
    navigate('/login')
  }

  const signOutHandler = () => {
    dispatch(asyncUnsetAuthUser())
  }

  if (!threadDetail) return null
  return (
        <DiscussionDetailWrapper {...threadDetail} authUser={authUser ? authUser.id : null} />
  )
}

export default DetailPage
