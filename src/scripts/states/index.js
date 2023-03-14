import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './auth-user/reducer'
import threadDetailReducer from './thread-detail/reducer'
import threadsReducer from './threads/reducer'
import usersReducer from './users/reducer'
import leaderboardsReducer from './leaderboards/reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'
import { navigationsReducer } from './navigations/reducer'

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    threadDetail: threadDetailReducer,
    threads: threadsReducer,
    users: usersReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
    navigations: navigationsReducer
  }
})

export default store
