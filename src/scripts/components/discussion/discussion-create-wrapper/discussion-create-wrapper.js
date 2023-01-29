import React, { useState } from 'react'
import './discussion-create-wrapper.scss'
import { FiPlus } from 'react-icons/fi'
import ModalCreateDiscussion from '../../modal/modal-create-discussion/modal-create-discussion'

const DiscussionCreateWrapper = () => {
  const [isModalShow, setIsModalShow] = useState(false)

  const createButtonClicked = () => {
    setIsModalShow(() => {
      return true
    })
  }

  const onCloseModal = () => {
    setIsModalShow(() => {
      return false
    })
  }

  return (
        <div className="discussion-create-wrapper">
            <button onClick={createButtonClicked}>
                <FiPlus className="discussion-create-wrapper__plus-icon" />
            </button>
            <ModalCreateDiscussion isOpen={isModalShow}
                                   onRequestClose={onCloseModal}/>
        </div>
  )
}

export default DiscussionCreateWrapper
