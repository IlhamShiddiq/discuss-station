import React from 'react'
import './discussion-list.scss'
import DiscussionItem from '../discussion-item/discussion-item'
import PropTypes from 'prop-types'
import { postedAt } from '../../../utils/time-format'

const DiscussionList = ({ threads }) => {
  return (
        <div className="discussion-list">
            <ul>
                {
                    threads.map((thread) => (
                        <li key={thread.id}><DiscussionItem id={thread.id}
                            avatar={thread.user.avatar}
                            creator_name={thread.user.name}
                            created_time={postedAt(thread.createdAt)}
                            title={thread.title}
                            content={thread.body}
                            like_count={thread.upVotesBy.length}
                            dislike_count={thread.downVotesBy.length}
                            reply_count={thread.totalComments}
                            category={thread.category}/></li>
                    ))
                }
            </ul>
        </div>
  )
}

DiscussionList.propTypes = {
  threads: PropTypes.array.isRequired
}

export default DiscussionList
