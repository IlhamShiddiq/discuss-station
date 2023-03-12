import React from 'react'
import PropTypes from 'prop-types'
import './tag-item.scss'

const TagItem = ({ item, onItemClicked }) => {
  const onItemSelected = () => {
    onItemClicked(item)
  }

  return (
        <button className="app-tag-item" onClick={onItemSelected}>
          <p>{`#${item}`}</p>
        </button>
  )
}

TagItem.propTypes = {
  item: PropTypes.string.isRequired,
  onItemClicked: PropTypes.func.isRequired
}

export default TagItem
