import React from 'react'
import './login-form.scss'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
      <div className="app-auth-login">
          <form>
              <div className="app-auth__input-group">
                  <input type="text" placeholder="Your Email" />
              </div>
              <div className="app-auth__input-group">
                  <input type="text" placeholder="Your Password" />
              </div>
              <div className="app-auth__input-group">
                  <button type="submit">Submit</button>
              </div>
              <p>Don’t have an account? Please register <Link to="/register">here</Link></p>
          </form>
      </div>
  )
}

export default LoginForm
