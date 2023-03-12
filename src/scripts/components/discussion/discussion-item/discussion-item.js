import React from 'react'
import { FiThumbsUp, FiThumbsDown, FiMessageSquare } from 'react-icons/fi'
import DiscussionIcon from '../discussion-icon/discussion-icon'
import DiscussionTag from '../discussion-tag/discussion-tag'
import PropTypes from 'prop-types'
import './discussion-item.scss'
import { Link } from 'react-router-dom'

const DiscussionItem = ({ id, avatar, creator_name, created_time, title, content, like_count, dislike_count, reply_count, category }) => {
  return (
        <div className="discussion-item">
            <div className="discussion-item__creator">
                <img src={avatar} alt="Creator Avatar"/>
                <p>{creator_name} • {created_time}</p>
            </div>
            <div className="discussion-item__title">
                <Link to={`/detail/${id}`}><h1>{title}</h1></Link>
            </div>
            <div className="discussion-item__content">
                <p>{content}</p>
            </div>
            <div className="discussion-item__info">
                <span className="discussion-item__info-icon"><DiscussionIcon icon={<FiThumbsUp size={20} />} amount={like_count} /></span>
                <span className="discussion-item__info-icon"><DiscussionIcon icon={<FiThumbsDown size={20} />} amount={dislike_count} /></span>
                <span className="discussion-item__info-icon"><DiscussionIcon icon={<FiMessageSquare size={20} />} amount={reply_count} /></span>
                <span><DiscussionTag category={category} /></span>
            </div>
        </div>
  )
}

DiscussionItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  creator_name: PropTypes.string.isRequired,
  created_time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  dislike_count: PropTypes.number.isRequired,
  reply_count: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
}

export default DiscussionItem
