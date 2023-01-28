import React from 'react'
import './discussion-list.scss'
import DiscussionItem from '../discussion-item/discussion-item'

const DiscussionList = () => {
  return (
        <div className="discussion-list">
            <ul>
                <li><DiscussionItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example.png`}
                    creator_name={'Ilham Shiddiq'}
                    created_time={'1 month ago'}
                    title={'Pengalaman Belajar React di Dicoding'}
                    content={'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.'}
                    like_count={0}
                    dislike_count={0}
                    reply_count={0}
                    category={'getwellsoon'}/></li>
                <li><DiscussionItem avatar={`${process.env.REACT_APP_BASE_URL}/images/avatar-example.png`}
                    creator_name={'Ilham Shiddiq'}
                    created_time={'1 month ago'}
                    title={'Halo! Selamat datang dan silakan perkenalkan diri kamu!'}
                    content={'Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya. Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya...'}
                    like_count={0}
                    dislike_count={0}
                    reply_count={0}
                    category={'justsharing'}/></li>
            </ul>
        </div>
  )
}

export default DiscussionList
