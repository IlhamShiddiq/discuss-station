import React, { useEffect } from 'react'
import LeaderboardWrapper from '../components/leaderboard/leaderboard-wrapper/leaderboard-wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveLeaderBoards } from '../states/leaderboards/action'

const LeaderboardPage = () => {
  const { leaderboards } = useSelector((states) => states)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveLeaderBoards())
  }, [dispatch])

  return (
    (leaderboards.length === 0) ? null : <LeaderboardWrapper leaderboards={leaderboards} />
  )
}

export default LeaderboardPage
