import React from 'react'
import LeaderboardItem from '../leaderboard-item/leaderboard-item'
import './leaderboard-list.scss'

const LeaderboardList = () => {
  return (
      <div className="leaderboard-list">
        <h1>Top 10 <span>Discuss</span>Station’s Users</h1>
        <LeaderboardItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example.png`}
                         user_name={'Ilham Shiddiq'}
                         point={95}/>
        <LeaderboardItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example-2.png`}
                         user_name={'Ilham Shiddiq'}
                         point={95}/>
        <LeaderboardItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example.png`}
                         user_name={'Ilham Shiddiq'}
                         point={95}/>
        <LeaderboardItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example-2.png`}
                         user_name={'Ilham Shiddiq'}
                         point={95}/>
        <LeaderboardItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example.png`}
                         user_name={'Ilham Shiddiq'}
                         point={95}/>
        <LeaderboardItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example-2.png`}
                         user_name={'Ilham Shiddiq'}
                         point={95}/>
        <LeaderboardItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example.png`}
                         user_name={'Ilham Shiddiq'}
                         point={95}/>
        <LeaderboardItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example-2.png`}
                         user_name={'Ilham Shiddiq'}
                         point={95}/>
        <LeaderboardItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example.png`}
                         user_name={'Ilham Shiddiq'}
                         point={95}/>
        <LeaderboardItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example-2.png`}
                         user_name={'Ilham Shiddiq'}
                         point={95}/>
      </div>
  )
}

export default LeaderboardList
