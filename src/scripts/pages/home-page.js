import React from 'react'
import TagWrapper from '../components/tag-wrapper/tag-wrapper/tag-wrapper'
import DiscussionListWrapper from '../components/discussion/discussion-list-wrapper/discussion-list-wrapper'
import DiscussionCreateWrapper from '../components/discussion/discussion-create-wrapper/discussion-create-wrapper'

const HomePage = () => {
  return (
      <>
        <TagWrapper />
        <DiscussionListWrapper />
          <DiscussionCreateWrapper />
      </>
  )
}

export default HomePage
