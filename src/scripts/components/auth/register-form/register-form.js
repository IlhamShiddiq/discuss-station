import React, { useState } from 'react'
import './register-form.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const RegisterForm = ({ onRegisterHandler }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onNameChange = ({ target }) => {
    setName(target.value)
  }

  const onEmailChange = ({ target }) => {
    setEmail(target.value)
  }

  const onPasswordChange = ({ target }) => {
    setPassword(target.value)
  }

  const onRegister = () => {
    onRegisterHandler({ name, email, password })

    setName('')
    setEmail('')
    setPassword('')
  }
  return (
        <div className="app-auth-login">
            <form>
                <div className="app-auth__input-group">
                    <input type="text" placeholder="Your Name" value={name} onChange={onNameChange} />
                </div>
                <div className="app-auth__input-group">
                    <input type="email" placeholder="Your Email" value={email} onChange={onEmailChange} />
                </div>
                <div className="app-auth__input-group">
                    <input type="password" placeholder="Your Password" value={password} onChange={onPasswordChange} />
                </div>
                <div className="app-auth__input-group">
                    <button type="button" onClick={onRegister}>Submit</button>
                </div>
                <p>Already have an account? Login <Link to="/login">here</Link></p>
            </form>
        </div>
  )
}

RegisterForm.propTypes = {
  onRegisterHandler: PropTypes.func.isRequired
}

export default RegisterForm
