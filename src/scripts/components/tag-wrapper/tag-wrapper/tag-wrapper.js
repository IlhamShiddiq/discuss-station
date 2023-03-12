import React from 'react'
import './tag-wrapper.scss'
import TagItem from '../tag-item/tag-item'
import PropTypes from 'prop-types'
import { rand } from '../../../utils/string-format'

const TagWrapper = ({ tags, onItemClicked }) => {
  const items = []
  tags.forEach((tag) => {
    if (!items.includes(tag)) items.push(tag)
  })

  return (
        <div className="app-tag-wrapper">
            <ul>
                <li key={`tag-${rand()}`}><TagItem item={'all'} onItemClicked={onItemClicked} /></li>
                {
                    items.map((item) => (
                        <li key={`tag-${rand()}`}><TagItem item={item} onItemClicked={onItemClicked} /></li>
                    ))
                }
            </ul>
        </div>
  )
}

TagWrapper.propTypes = {
  tags: PropTypes.array.isRequired,
  onItemClicked: PropTypes.func.isRequired
}

export default TagWrapper
