import React from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import DiscussionIcon from '../discussion-icon/discussion-icon'
import PropTypes from 'prop-types'
import DiscussionLikeButton from '../discussion-like-button/discussion-like-button'
import './discussion-reply-item.scss'
import { useDispatch } from 'react-redux'
import {
  asyncDownVoteComment,
  asyncNeutralVoteComment,
  asyncUpVoteComment
} from '../../../states/thread-detail/action'
import { useNavigate } from 'react-router-dom'

const DiscussionReplyItem = ({ id, avatar, creator_name, content, created_time, up_vote_by, down_vote_by, authUser }) => {
  const isUpVoted = up_vote_by.includes(authUser)
  const isDownVoted = down_vote_by.includes(authUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onUpVoteClick = () => {
    if (authUser) {
      isUpVoted ? dispatch(asyncNeutralVoteComment(id)) : dispatch(asyncUpVoteComment(id))
    } else {
      navigate('/login')
    }
  }

  const onDownVoteClick = () => {
    if (authUser) {
      isDownVoted ? dispatch(asyncNeutralVoteComment(id)) : dispatch(asyncDownVoteComment(id))
    } else {
      navigate('/login')
    }
  }

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
                <DiscussionIcon icon={<DiscussionLikeButton is_active={isUpVoted} label={<FiChevronUp size={20} />} onClickHandler={onUpVoteClick} />}
                    amount={up_vote_by.length} />
                <DiscussionIcon icon={<DiscussionLikeButton is_active={isDownVoted} label={<FiChevronDown size={20} />} onClickHandler={onDownVoteClick} />}
                    amount={down_vote_by.length} />
            </div>
        </div>
  )
}

DiscussionReplyItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  creator_name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created_time: PropTypes.string.isRequired,
  up_vote_by: PropTypes.array.isRequired,
  down_vote_by: PropTypes.array.isRequired,
  authUser: PropTypes.string
}

export default DiscussionReplyItem
