import React from 'react'
import './discussion-detail-wrapper.scss'
import DiscussionDetail from '../discussion-detail/discussion-detail'
import PropTypes from 'prop-types'

const DiscussionDetailWrapper = ({
  authUser,
  owner,
  title,
  body,
  upVotesBy,
  downVotesBy,
  comments,
  createdAt
}) => {
  return (
      <div className="discussion-detail-wrapper">
        <DiscussionDetail authUser={authUser}
                          owner={owner}
                          title={title}
                          body={body}
                          upVotesBy={upVotesBy}
                          downVotesBy={downVotesBy}
                          comments={comments}
                          createdAt={createdAt} />
      </div>
  )
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

DiscussionDetailWrapper.propTypes = {
  authUser: PropTypes.string,
  owner: PropTypes.shape(ownerShape).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.array.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default DiscussionDetailWrapper
