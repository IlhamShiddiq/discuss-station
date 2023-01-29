import React from 'react'
import PropTypes from 'prop-types'
import './leaderboard-item.scss'

const LeaderboardItem = ({ avatar, user_name, point }) => {
  return (
      <div className="leaderboard-item">
          <div className="leaderboard-item__user">
              <img src={avatar} alt="Creator Avatar"/>
              <p>{user_name}</p>
              <p className="leaderboard-item__user-point">{point}</p>
          </div>
      </div>
  )
}

LeaderboardItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  user_name: PropTypes.string.isRequired,
  point: PropTypes.number.isRequired
}

export default LeaderboardItem
