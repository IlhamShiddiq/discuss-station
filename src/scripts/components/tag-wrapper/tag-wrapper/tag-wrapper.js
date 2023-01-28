import React from 'react'
import './tag-wrapper.scss'
import TagItem from '../tag-item/tag-item'

const TagWrapper = () => {
  return (
        <div className="app-tag-wrapper">
            <ul>
                <li><TagItem item="#pleasehelpdong" /></li>
                <li><TagItem item="#truekahmint" /></li>
                <li><TagItem item="#masasih" /></li>
                <li><TagItem item="#getwellsoonyah" /></li>
            </ul>
        </div>
  )
}

export default TagWrapper
