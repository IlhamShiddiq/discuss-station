import React from 'react'
import LeaderboardItem from '../leaderboard-item/leaderboard-item'
import './leaderboard-list.scss'
import PropTypes from 'prop-types'

const LeaderboardList = ({ leaderboards }) => {
  return (
      <div className="leaderboard-list">
        <h1>Top 10 <span>Discuss</span>Station’s Users</h1>
          {
              leaderboards.map((leaderboard) => (
                  <LeaderboardItem key={leaderboard.user.id} avatar={leaderboard.user.avatar}
                                   user_name={leaderboard.user.name}
                                   point={leaderboard.score}/>
              ))
          }
      </div>
  )
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.array.isRequired
}

export default LeaderboardList
