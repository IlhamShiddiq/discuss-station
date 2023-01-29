import React from 'react'
import './discussion-list-wrapper.scss'
import DiscussionList from '../discussion-list/discussion-list'

const DiscussionListWrapper = () => {
  return (
        <div className="discussion-list-wrapper">
            <h1>All <span>Discussion</span></h1>
            <DiscussionList />
        </div>
  )
}

export default DiscussionListWrapper
