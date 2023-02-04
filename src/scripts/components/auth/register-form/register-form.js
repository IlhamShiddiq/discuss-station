import React from 'react'
import './register-form.scss'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
        <div className="app-auth-login">
            <form>
                <div className="app-auth__input-group">
                    <input type="text" placeholder="Your Name" />
                </div>
                <div className="app-auth__input-group">
                    <input type="text" placeholder="Your Email" />
                </div>
                <div className="app-auth__input-group">
                    <input type="text" placeholder="Your Password" />
                </div>
                <div className="app-auth__input-group">
                    <button type="submit">Submit</button>
                </div>
                <p>Already have an account? Login <Link to="/login">here</Link></p>
            </form>
        </div>
  )
}

export default RegisterForm
