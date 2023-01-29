import React from 'react'
import './discussion-reply-input.scss'

const DiscussionReplyInput = () => {
  return (
        <div className='discussion-reply-input'>
            <form>
                <div className="discussion-reply-input__creator">
                    <img src={`${process.env.REACT_APP_BASE_URL}/images/avatar-example-2.png`} alt="Creator Avatar"/>
                    <p>{'Shiddiq Ilham'}</p>
                </div>
                <div className="discussion-reply-input__textarea">
                    <textarea placeholder="Write your reply"></textarea>
                </div>
                <div className="discussion-reply-input__submit">
                    <button>Submit</button>
                </div>
            </form>
        </div>
  )
}

export default DiscussionReplyInput
