import React, { useState } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import './modal-create-discussion.scss'

const ModalCreateDiscussion = ({ isOpen, onRequestClose, addThreadHandler }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('')

  const addThread = () => {
    if (title.trim() && body.trim()) {
      addThreadHandler({ title, body, category })

      setTitle('')
      setBody('')
      setCategory('')
    }
  }

  const titleChangeHandler = ({ target }) => {
    setTitle(target.value)
  }

  const bodyChangeHandler = ({ target }) => {
    setBody(target.value)
  }

  const categoryChangeHandler = ({ target }) => {
    setCategory(target.value)
  }

  return (
        <ReactModal
            isOpen={isOpen}
            className="modal-create-discussion__modal"
            overlayClassName="modal-create-discussion__overlay"
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={true}
        >
            <h1>Create New Discussion</h1>
            <form>
                <div className="modal-create-discussion__input-group">
                    <input type="text" placeholder="Title" value={title} onChange={titleChangeHandler} required />
                </div>
                <div className="modal-create-discussion__input-group">
                    <input type="text" placeholder="Category" value={category} onChange={categoryChangeHandler} />
                </div>
                <div className="modal-create-discussion__input-group">
                    <textarea placeholder="Content" value={body} onChange={bodyChangeHandler} required></textarea>
                </div>
                <div className="modal-create-discussion__input-group">
                    <button type="button" onClick={addThread}>Submit</button>
                </div>
            </form>
        </ReactModal>
  )
}

ModalCreateDiscussion.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  addThreadHandler: PropTypes.func.isRequired
}

ReactModal.setAppElement('#root')

export default ModalCreateDiscussion
