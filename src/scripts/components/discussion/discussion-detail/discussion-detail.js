import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiChevronDown, FiChevronUp, FiMessageSquare } from 'react-icons/fi'
import DiscussionIcon from '../discussion-icon/discussion-icon'
import DiscussionReplyList from '../discussion-reply-list/discussion-reply-list'
import DiscussionReplyInput from '../discussion-reply-input/discussion-reply-input'
import DiscussionLikeButton from '../discussion-like-button/discussion-like-button'
import './discussion-detail.scss'
import { postedAt } from '../../../utils/time-format'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { asyncDownVoteThread, asyncNeutralVoteThread, asyncUpVoteThread } from '../../../states/thread-detail/action'

const DiscussionDetail = ({
  authUser,
  owner,
  title,
  body,
  upVotesBy,
  downVotesBy,
  comments,
  createdAt
}) => {
  const isUpVoted = upVotesBy.includes(authUser)
  const isDownVoted = downVotesBy.includes(authUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onUpVoteClick = () => {
    if (authUser) {
      isUpVoted ? dispatch(asyncNeutralVoteThread()) : dispatch(asyncUpVoteThread())
    } else {
      navigate('/login')
    }
  }

  const onDownVoteClick = () => {
    if (authUser) {
      isDownVoted ? dispatch(asyncNeutralVoteThread()) : dispatch(asyncDownVoteThread())
    } else {
      navigate('/login')
    }
  }

  return (
        <div className="discussion-detail">
            <div className="discussion-detail__creator">
                <img src={owner.avatar} alt="Creator Avatar"/>
                <p>{owner.name} • {postedAt(createdAt)}</p>
            </div>
            <div className="discussion-detail__title">
                <h1>{title}</h1>
            </div>
            <div className="discussion-detail__content">
                <p>{body}</p>
            </div>
            <div className="discussion-detail__info">
                <DiscussionIcon icon={<DiscussionLikeButton is_active={isUpVoted} label={<FiChevronUp size={20} />} onClickHandler={onUpVoteClick} />}
                    amount={upVotesBy.length} />
                <DiscussionIcon icon={<DiscussionLikeButton is_active={isDownVoted} label={<FiChevronDown size={20} />} onClickHandler={onDownVoteClick} />}
                    amount={downVotesBy.length} />
            </div>
            <div className="discussion-detail__create-reply">
                {
                    authUser
                      ? <DiscussionReplyInput />
                      : <p>Please <Link to="/login"><span>login</span></Link> first to create a reply in this discussion</p>
                }
            </div>
            <div className="discussion-detail__replies">
                <div className="discussion-detail__replies-info">
                    <DiscussionIcon icon={<FiMessageSquare size={20} />} amount={comments.length} /> &nbsp;replies
                </div>
                <DiscussionReplyList comments={comments} authUser={authUser} />
            </div>
        </div>
  )
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

DiscussionDetail.propTypes = {
  authUser: PropTypes.string,
  owner: PropTypes.shape(ownerShape).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.array.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default DiscussionDetail
