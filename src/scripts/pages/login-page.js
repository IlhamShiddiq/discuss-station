import React from 'react'
import AuthForm from '../components/auth/auth/auth-form'
import LoginForm from '../components/auth/login-form/login-form'
import { useDispatch } from 'react-redux'
import { asyncSetAuthUser } from '../states/auth-user/action'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onLoginHandler = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
    navigate('/')
  }
  return (
        <AuthForm title="LOGIN" form_auth={<LoginForm onLoginHandler={onLoginHandler} />} />
  )
}

export default LoginPage
