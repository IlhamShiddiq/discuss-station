import React from 'react'
import DiscussionReplyItem from '../discussion-reply-item/discussion-reply-item'
import './discussion-reply-list.scss'

const DiscussionReplyList = () => {
  return (
        <div className="discussion-reply-list">
          <DiscussionReplyItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example-2.png`}
                               creator_name={'Shiddiq Ilham'}
                               content={'test'}
                               created_time={'2 Hours ago'}
                               like_count={2}
                               dislike_count={0}/>
          <DiscussionReplyItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example-2.png`}
                               creator_name={'Someone Special'}
                               content={'Halo! Saya Dimas, dari Bandung. Saat ini, saya sedang belajar React di Dicoding Academy.'}
                               created_time={'3 Hours ago'}
                               like_count={0}
                               dislike_count={0}/>
        </div>
  )
}

export default DiscussionReplyList
