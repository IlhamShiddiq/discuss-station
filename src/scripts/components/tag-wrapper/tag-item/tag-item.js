import React from 'react'
import PropTypes from 'prop-types'
import './tag-item.scss'

const TagItem = ({ item }) => {
  return (
        <button className="app-tag-item">
          <p>{item}</p>
        </button>
  )
}

TagItem.propTypes = {
  item: PropTypes.string.isRequired
}

export default TagItem
