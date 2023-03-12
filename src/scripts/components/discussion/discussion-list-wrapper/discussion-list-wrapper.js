import React from 'react'
import './discussion-list-wrapper.scss'
import DiscussionList from '../discussion-list/discussion-list'
import PropTypes from 'prop-types'

const DiscussionListWrapper = ({ threads }) => {
  return (
        <div className="discussion-list-wrapper">
            <h1>All <span>Discussion</span></h1>
            <DiscussionList threads={threads} />
        </div>
  )
}

DiscussionListWrapper.propTypes = {
  threads: PropTypes.array.isRequired
}

export default DiscussionListWrapper
