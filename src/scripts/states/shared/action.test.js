import api from '../../utils/api'
import { asyncPopulateUsersAndThreads } from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { receiveUsersActionCreator } from '../users/action'
import { receiveThreadsActionCreator } from '../threads/action'

/**
 * skenario test
 *
 * - asyncPopulateUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0
  }
]

const fakeUsersResponse = [
  {
    id: 'user-1',
    name: 'User Test 1',
    email: 'john@example.com',
    photo: 'https://generated-image-url.jpg'
  }
]

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncPopulateUsersAndTalks thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers
    api._getAllThreads = api.getAllThreads
  })

  afterEach(() => {
    api.getAllUsers = api._getAllUsers
    api.getAllThreads = api._getAllThreads

    delete api._getAllUsers
    delete api._getAllThreads
  })

  it('should dispatch action correctly when data fetching success', async () => {
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse)
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse)
    const dispatch = jest.fn()

    await asyncPopulateUsersAndThreads()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse))
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getAllUsers = () => Promise.reject(fakeErrorResponse)
    api.getAllThreads = () => Promise.reject(fakeErrorResponse)
    const dispatch = jest.fn()
    window.alert = jest.fn()

    await asyncPopulateUsersAndThreads()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
