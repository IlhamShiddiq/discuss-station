import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './auth-user/reducer'
import isPreloadReducer from './is-preload/reducer'
import threadDetailReducer from './thread-detail/reducer'
import threadsReducer from './threads/reducer'
import usersReducer from './users/reducer'
import leaderboardsReducer from './leaderboards/reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    threadDetail: threadDetailReducer,
    threads: threadsReducer,
    users: usersReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer
  }
})

export default store
