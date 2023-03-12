import React from 'react'
import DiscussionReplyItem from '../discussion-reply-item/discussion-reply-item'
import './discussion-reply-list.scss'
import PropTypes from 'prop-types'
import { postedAt } from '../../../utils/time-format'

const DiscussionReplyList = ({ comments, authUser }) => {
  return (
        <div className="discussion-reply-list">
            {
                comments.map((comment) => (
                    <DiscussionReplyItem key={comment.id} id={comment.id}
                                         avatar={comment.owner.avatar}
                                         creator_name={comment.owner.name}
                                         content={comment.content}
                                         created_time={postedAt(comment.createdAt)}
                                         up_vote_by={comment.upVotesBy}
                                         down_vote_by={comment.downVotesBy}
                                         authUser={authUser} />
                ))
            }
        </div>
  )
}

DiscussionReplyList.propTypes = {
  comments: PropTypes.array,
  authUser: PropTypes.string
}

export default DiscussionReplyList
