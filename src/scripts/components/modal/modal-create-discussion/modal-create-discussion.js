import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import './modal-create-discussion.scss'

const ModalCreateDiscussion = ({ isOpen, onRequestClose }) => {
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
                    <input type="text" placeholder="Title" />
                </div>
                <div className="modal-create-discussion__input-group">
                    <input type="text" placeholder="Category" />
                </div>
                <div className="modal-create-discussion__input-group">
                    <textarea placeholder="Content"></textarea>
                </div>
                <div className="modal-create-discussion__input-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </ReactModal>
  )
}

ModalCreateDiscussion.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

ReactModal.setAppElement('#root')

export default ModalCreateDiscussion
