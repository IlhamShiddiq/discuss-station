import React from 'react'
import PropTypes from 'prop-types'
import './discussion-tag.scss'

const DiscussionTag = ({ category }) => {
  return (
        <div className="discussion-tag">
            <p>#{category}</p>
        </div>
  )
}

DiscussionTag.propTypes = {
  category: PropTypes.string.isRequired
}

export default DiscussionTag
