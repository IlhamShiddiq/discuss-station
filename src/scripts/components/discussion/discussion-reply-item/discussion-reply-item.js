import React from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import DiscussionIcon from '../discussion-icon/discussion-icon'
import PropTypes from 'prop-types'
import DiscussionLikeButton from '../discussion-like-button/discussion-like-button'
import './discussion-reply-item.scss'

const DiscussionReplyItem = ({ avatar, creator_name, content, created_time, like_count, dislike_count }) => {
  return (
        <div className="discussion-reply-item">
            <div className="discussion-reply-item__creator">
                <img src={avatar} alt="Creator Avatar"/>
                <p>{creator_name}</p>
            </div>
            <div className="discussion-reply-item__content">
                <p>{content}</p>
            </div>
            <div className="discussion-reply-item__info">
                <p>{created_time}</p>
                <DiscussionIcon icon={<DiscussionLikeButton is_active={true} label={<FiChevronUp size={20} />} />} amount={like_count} />
                <DiscussionIcon icon={<DiscussionLikeButton label={<FiChevronDown size={20} />} />} amount={dislike_count} />
            </div>
        </div>
  )
}

DiscussionReplyItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  creator_name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created_time: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  dislike_count: PropTypes.number.isRequired
}

export default DiscussionReplyItem
