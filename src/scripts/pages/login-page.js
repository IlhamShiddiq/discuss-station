import React from 'react'
import AuthForm from '../components/auth/auth/auth-form'
import LoginForm from '../components/auth/login-form/login-form'

const LoginPage = () => {
  return (
        <AuthForm title="LOGIN" form_auth={<LoginForm />} />
  )
}

export default LoginPage
