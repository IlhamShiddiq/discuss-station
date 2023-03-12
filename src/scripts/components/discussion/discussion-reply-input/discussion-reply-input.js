import React, { useState } from 'react'
import './discussion-reply-input.scss'
import { useDispatch, useSelector } from 'react-redux'
import { asyncAddComment } from '../../../states/thread-detail/action'

const DiscussionReplyInput = () => {
  const { authUser } = useSelector((states) => states)
  const [reply, setReply] = useState('')
  const dispatch = useDispatch()

  const onReplyChange = ({ target }) => {
    setReply(target.value)
  }

  const onReplySubmit = () => {
    dispatch(asyncAddComment(reply))
    setReply('')
  }

  return (
        <div className='discussion-reply-input'>
            <form>
                <div className="discussion-reply-input__creator">
                    <img src={authUser.avatar} alt="Creator Avatar"/>
                    <p>{'Shiddiq Ilham'}</p>
                </div>
                <div className="discussion-reply-input__textarea">
                    <textarea placeholder="Write your reply" value={reply} onChange={onReplyChange}></textarea>
                </div>
                <div className="discussion-reply-input__submit">
                    <button type="button" onClick={onReplySubmit}>Submit</button>
                </div>
            </form>
        </div>
  )
}

export default DiscussionReplyInput
