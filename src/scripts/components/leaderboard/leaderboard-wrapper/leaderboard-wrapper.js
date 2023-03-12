import React from 'react'
import LeaderboardList from '../leaderboard-list/leaderboard-list'
import './leaderboard-wrapper.scss'
import PropTypes from 'prop-types'

const LeaderboardWrapper = ({ leaderboards }) => {
  return (
      <div className="leaderboard-wrapper">
        <LeaderboardList leaderboards={leaderboards} />
      </div>
  )
}

LeaderboardWrapper.propTypes = {
  leaderboards: PropTypes.array.isRequired
}

export default LeaderboardWrapper
