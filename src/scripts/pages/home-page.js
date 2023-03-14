import React, { useEffect, useState } from 'react'
import TagWrapper from '../components/tag-wrapper/tag-wrapper/tag-wrapper'
import DiscussionListWrapper from '../components/discussion/discussion-list-wrapper/discussion-list-wrapper'
import DiscussionCreateWrapper from '../components/discussion/discussion-create-wrapper/discussion-create-wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'
import { asyncAddThread } from '../states/threads/action'
import { setNavigationActionCreator } from '../states/navigations/action'
import { useNavigate } from 'react-router-dom'
import { asyncUnsetAuthUser } from '../states/auth-user/action'

const HomePage = () => {
  const {
    authUser,
    threads,
    users
  } = useSelector((states) => states)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [tags, setTags] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setNavigationActionCreator([
      { label: 'Leaderboards', onClickHandler: navigateToLeaderboards },
      { label: authUser ? 'Signout' : 'Login', onClickHandler: authUser ? signOutHandler : navigateToLogin }
    ]))
  }, [authUser])

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  useEffect(() => {
    setTags(threads.map((thread) => thread.category))
  }, [threads])

  const addThreadHandler = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }))
  }

  const threadsList = threads.filter((thread) => {
    if (selectedCategory !== 'all') {
      return thread.category === selectedCategory
    }
    return thread
  }).map((thread) => {
    return {
      ...thread,
      user: users.find((user) => user.id === thread.ownerId),
      authUser: authUser ? authUser.id : null
    }
  })

  const onCategoryButtonClick = (category) => {
    setSelectedCategory(category)
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

  return (
      <>
        <TagWrapper tags={tags} onItemClicked={onCategoryButtonClick} />
        <DiscussionListWrapper threads={threadsList} />
        <DiscussionCreateWrapper addThreadHandler={addThreadHandler} />
      </>
  )
}

export default HomePage
