import React, { useState } from 'react'
import './login-form.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const LoginForm = ({ onLoginHandler }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onEmailChange = ({ target }) => {
    setEmail(target.value)
  }

  const onPasswordChange = ({ target }) => {
    setPassword(target.value)
  }

  const onLogin = () => {
    onLoginHandler({ email, password })
  }

  return (
      <div className="app-auth-login">
          <form>
              <div className="app-auth__input-group">
                  <input type="text" placeholder="Your Email" value={email} onChange={onEmailChange} />
              </div>
              <div className="app-auth__input-group">
                  <input type="password" placeholder="Your Password" value={password} onChange={onPasswordChange} />
              </div>
              <div className="app-auth__input-group">
                  <button type="button" onClick={onLogin}>Submit</button>
              </div>
              <p>Don’t have an account? Please register <Link to="/register">here</Link></p>
          </form>
      </div>
  )
}

LoginForm.propTypes = {
  onLoginHandler: PropTypes.func.isRequired
}

export default LoginForm
