import React from 'react'
import AuthForm from '../components/auth/auth/auth-form'
import RegisterForm from '../components/auth/register-form/register-form'

const RegisterPage = () => {
  return (
      <AuthForm title="REGISTER" form_auth={<RegisterForm />} />
  )
}

export default RegisterPage
