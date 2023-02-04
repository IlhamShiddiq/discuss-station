import React from 'react'
import PropTypes from 'prop-types'
import './auth-form.scss'

const AuthForm = ({ title, form_auth }) => {
  return (
        <div className="app-auth">
            <div className="app-auth__image">
                <div className="app-auth__image-container">
                    <img src={`${process.env.REACT_APP_BASE_URL}/images/auth-illustration.png`} />
                </div>
            </div>
            <div className="app-auth__input">
                <div className="app-auth__input-container">
                    <div className="app-auth__input-form">
                        <h1>{title}</h1>
                        {form_auth}
                    </div>
                </div>
            </div>
        </div>
  )
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  form_auth: PropTypes.element.isRequired,
}

export default AuthForm
