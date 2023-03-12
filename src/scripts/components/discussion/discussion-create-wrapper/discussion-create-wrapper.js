import React, { useState } from 'react'
import './discussion-create-wrapper.scss'
import { FiPlus } from 'react-icons/fi'
import ModalCreateDiscussion from '../../modal/modal-create-discussion/modal-create-discussion'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DiscussionCreateWrapper = ({ addThreadHandler }) => {
  const { authUser } = useSelector((states) => states)
  const navigate = useNavigate()
  const [isModalShow, setIsModalShow] = useState(false)

  const createButtonClicked = () => {
    if (authUser) {
      setIsModalShow(() => {
        return true
      })
    } else {
      navigate('/login')
    }
  }

  const onCloseModal = () => {
    setIsModalShow(() => {
      return false
    })
  }

  const addThread = ({ title, body, category }) => {
    addThreadHandler({ title, body, category })
    setIsModalShow(false)
  }

  return (
        <div className="discussion-create-wrapper">
            <button onClick={createButtonClicked}>
                <FiPlus className="discussion-create-wrapper__plus-icon" />
            </button>
            <ModalCreateDiscussion isOpen={isModalShow}
                                   onRequestClose={onCloseModal}
                                   addThreadHandler={addThread}/>
        </div>
  )
}

DiscussionCreateWrapper.propTypes = {
  addThreadHandler: PropTypes.func.isRequired
}

export default DiscussionCreateWrapper
