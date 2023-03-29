/**
 * skenario test
 *
 * - asyncReceiveLeaderBoards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import api from '../../utils/api'
import { asyncReceiveLeaderBoards, receiveLeaderboardsActionCreator } from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg'
    },
    score: 10
  }
]

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncReceiveLeaderBoards thunk', () => {
  beforeEach(() => {
    api._getLeaderboards = api.getLeaderboards
  })

  afterEach(() => {
    api.getLeaderboards = api._getLeaderboards

    delete api._getLeaderboards
  })

  it('should dispatch action correctly when data fetching success', async () => {
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse)
    const dispatch = jest.fn()

    await asyncReceiveLeaderBoards()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse)
    const dispatch = jest.fn()
    window.alert = jest.fn()

    await asyncReceiveLeaderBoards()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
