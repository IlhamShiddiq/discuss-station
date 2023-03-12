import api from '../../utils/api'
import { asyncSetAuthUser } from '../auth-user/action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS'
}

const receiveUsersActionCreator = (users) => {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users
    }
  }
}

const asyncRegisterUser = ({ name, email, password }) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      await api.register({ name, email, password })
      dispatch(asyncSetAuthUser({ email, password }))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser
}
