import React from 'react'
import './discussion-wrapper.scss'
import DiscussionList from '../discussion-list/discussion-list'

const DiscussionWrapper = () => {
  return (
        <div className="discussion-wrapper">
            <h1>All <span>Discussion</span></h1>
            <DiscussionList />
        </div>
  )
}

export default DiscussionWrapper
