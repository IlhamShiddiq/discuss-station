import React from 'react'
import PropTypes from 'prop-types'
import './avatar.scss'

const Avatar = ({ source, alt, width }) => {
  return (
        <img className="app-avatar" src={source} alt={alt} width={width}/>
  )
}

Avatar.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
}

export default Avatar
