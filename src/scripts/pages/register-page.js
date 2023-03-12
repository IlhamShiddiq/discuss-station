import React from 'react'
import AuthForm from '../components/auth/auth/auth-form'
import RegisterForm from '../components/auth/register-form/register-form'
import { useDispatch } from 'react-redux'
import { asyncRegisterUser } from '../states/users/action'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onRegisterHandler = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }))
    navigate('/')
  }

  return (
      <AuthForm title="REGISTER" form_auth={<RegisterForm onRegisterHandler={onRegisterHandler} />} />
  )
}

export default RegisterPage
