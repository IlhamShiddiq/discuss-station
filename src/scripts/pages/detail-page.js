import React, { useEffect } from 'react'
import DiscussionDetailWrapper from '../components/discussion/discussion-detail-wrapper/discussion-detail-wrapper'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveThreadDetail } from '../states/thread-detail/action'

const DetailPage = () => {
  const { id } = useParams()
  const {
    authUser,
    threadDetail
  } = useSelector((states) => states)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  if (!threadDetail) return null
  return (
        <DiscussionDetailWrapper {...threadDetail} authUser={authUser ? authUser.id : null} />
  )
}

export default DetailPage
