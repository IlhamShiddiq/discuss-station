import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  SET_USER_AUTH: 'SET_USER_AUTH',
  UNSET_USER_AUTH: 'UNSET_USER_AUTH'
}

const setAuthUserActionCreator = (userAuth) => {
  return {
    type: ActionType.SET_USER_AUTH,
    payload: {
      userAuth
    }
  }
}

const unsetAuthUserActionCreator = () => {
  return {
    type: ActionType.UNSET_USER_AUTH
  }
}

const asyncSetAuthUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const token = await api.login({ email, password })
      api.putAccessToken(token)

      const userAuth = await api.getOwnProfile()
      dispatch(setAuthUserActionCreator(userAuth))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncGetAuthUser = () => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const userAuth = await api.getOwnProfile()
      dispatch(setAuthUserActionCreator(userAuth))
    } catch (error) {
      dispatch(setAuthUserActionCreator(null))
    }
    dispatch(hideLoading())
  }
}

const asyncUnsetAuthUser = () => {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator())
    api.putAccessToken('')
  }
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncGetAuthUser,
  asyncUnsetAuthUser
}
