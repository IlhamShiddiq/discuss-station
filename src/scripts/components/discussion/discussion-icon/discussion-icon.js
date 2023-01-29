import React from 'react'
import PropTypes from 'prop-types'
import './discussion-icon.scss'

const DiscussionIcon = ({ icon, amount }) => {
  return (
        <div className="discussion-icon">
            <span>{icon}</span> <p>{amount}</p>
        </div>
  )
}

DiscussionIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  amount: PropTypes.number.isRequired
}

export default DiscussionIcon
