import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiChevronUp, FiMessageSquare } from 'react-icons/fi'
import DiscussionIcon from '../discussion-icon/discussion-icon'
import DiscussionReplyList from '../discussion-reply-list/discussion-reply-list'
import DiscussionReplyInput from '../discussion-reply-input/discussion-reply-input'
import DiscussionLikeButton from '../discussion-like-button/discussion-like-button'
import './discussion-detail.scss'

const DiscussionDetail = () => {
  const userAuth = true

  return (
        <div className="discussion-detail">
            <div className="discussion-detail__creator">
                <img src={`${process.env.REACT_APP_BASE_URL}/images/avatar-example.png`} alt="Creator Avatar"/>
                <p>{'Ilham Shiddiq'} • {'1 month ago'}</p>
            </div>
            <div className="discussion-detail__title">
                <h1>{'Pengalaman Belajar React di Dicoding'}</h1>
            </div>
            <div className="discussion-detail__content">
                <p>{'Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya. Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya'}</p>
            </div>
            <div className="discussion-detail__info">
                <DiscussionIcon icon={<DiscussionLikeButton is_active={true} label={<FiChevronUp size={20} />} />} amount={0} />
                <DiscussionIcon icon={<DiscussionLikeButton label={<FiChevronDown size={20} />} />} amount={1} />
            </div>
            <div className="discussion-detail__create-reply">
                {
                    userAuth
                      ? <DiscussionReplyInput />
                      : <p>Please <Link to="#"><span>login</span></Link> first to create a reply in this discussion</p>
                }
            </div>
            <div className="discussion-detail__replies">
                <div className="discussion-detail__replies-info">
                    <DiscussionIcon icon={<FiMessageSquare size={20} />} amount={2} /> &nbsp;replies
                </div>
                <DiscussionReplyList />
            </div>
        </div>
  )
}

export default DiscussionDetail
