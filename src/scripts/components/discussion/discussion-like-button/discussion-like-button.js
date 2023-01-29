import React from 'react'
import PropTypes from 'prop-types'
import './discussion-like-button.scss'

const DiscussionLikeButton = ({ label, is_active = false }) => {
  return (
      <button className={is_active ? 'discussion-like-button-active' : 'discussion-like-button'}>{label}</button>
  )
}

DiscussionLikeButton.propTypes = {
  label: PropTypes.element.isRequired,
  is_active: PropTypes.bool
}

export default DiscussionLikeButton
