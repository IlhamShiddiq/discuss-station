/**
 * test scenario for talksReducer
 *
 * - threadDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the thread detail when given by SET_THREAD_DETAIL action
 *  - should return null when given by UNSET_THREAD_DETAIL action
 *  - should return the thread detail with upVotesBy that contain user-2 inside it when given by UP_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with downVotesBy that contain user-2 inside it when given by DOWN_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with upVotesBy and downVotesBy that doesn't contain user-2 inside it when given by NEUTRAL_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with new comment when given by ADD_THREAD_COMMENT action
 *  - should return the thread detail with comments and upVotesBy that contain user-2 inside it when given by UP_VOTE_THREAD_COMMENT action
 *  - should return the thread detail with comments and downVotesBy that contain user-2 inside it when given by DOWN_VOTE_THREAD_COMMENT action
 *  - should return the thread detail with comments, upVotesBy and downVotesBy that doesn't contain user-2 inside it when given by NEUTRAL_VOTE_THREAD_COMMENT action
 *
 */

import threadDetailReducer from './reducer'

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = []
    const action = { type: 'UNKNOWN' }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the thread detail when given by SET_THREAD_DETAIL action', () => {
    const initialState = []
    const action = {
      type: 'SET_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg'
              },
              upVotesBy: [],
              downVotesBy: []
            }
          ]
        }
      }
    }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState).toEqual(action.payload.threadDetail)
  })

  it('should return null when given by UNSET_THREAD_DETAIL action', () => {
    const initialState = []
    const action = { type: 'UNSET_THREAD_DETAIL' }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState).toEqual(null)
  })

  it('should return the thread detail with upVotesBy that contain user-2 inside it when given by UP_VOTE_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: []
    }
    const action = {
      type: 'UP_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'user-2'
      }
    }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState.upVotesBy).toContain(action.payload.userId)
    expect(nextState.downVotesBy).not.toContain(action.payload.userId)
  })

  it('should return the thread detail with downVotesBy that contain user-2 inside it when given by DOWN_VOTE_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: []
    }
    const action = {
      type: 'DOWN_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'user-2'
      }
    }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState.downVotesBy).toContain(action.payload.userId)
    expect(nextState.upVotesBy).not.toContain(action.payload.userId)
  })

  it('should return the thread detail with upVotesBy and downVotesBy that doesn\'t contain user-2 inside it when given by NEUTRAL_VOTE_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [
        'user-2'
      ],
      downVotesBy: [],
      comments: []
    }
    const action = {
      type: 'NEUTRAL_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'user-2'
      }
    }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState.upVotesBy).not.toContain(action.payload.userId)
    expect(nextState.downVotesBy).not.toContain(action.payload.userId)
  })

  it('should return the thread detail with new comment when given by ADD_THREAD_COMMENT action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: []
    }
    const action = {
      type: 'ADD_THREAD_COMMENT',
      payload: {
        comment: {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com'
          }
        }
      }
    }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState.comments).toEqual([action.payload.comment, ...initialState.comments])
  })

  it('should return the thread detail with comments and upVotesBy that contain user-2 inside it when given by UP_VOTE_THREAD_COMMENT action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    }
    const action = {
      type: 'UP_VOTE_THREAD_COMMENT',
      payload: {
        userId: 'user-2',
        commentId: 'comment-1'
      }
    }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState.comments[0].upVotesBy).toContain(action.payload.userId)
    expect(nextState.comments[0].downVotesBy).not.toContain(action.payload.userId)
  })

  it('should return the thread detail with comments and downVotesBy that contain user-2 inside it when given by DOWN_VOTE_THREAD_COMMENT action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    }
    const action = {
      type: 'DOWN_VOTE_THREAD_COMMENT',
      payload: {
        userId: 'user-2',
        commentId: 'comment-1'
      }
    }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState.comments[0].downVotesBy).toContain(action.payload.userId)
    expect(nextState.comments[0].upVotesBy).not.toContain(action.payload.userId)
  })

  it('should return the thread detail with comments, upVotesBy and downVotesBy that doesn\'t contain user-2 inside it when given by NEUTRAL_VOTE_THREAD_COMMENT action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [
            'user-2'
          ],
          downVotesBy: []
        }
      ]
    }
    const action = {
      type: 'NEUTRAL_VOTE_THREAD_COMMENT',
      payload: {
        userId: 'user-2',
        commentId: 'comment-1'
      }
    }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState.comments[0].upVotesBy).not.toContain(action.payload.userId)
    expect(nextState.comments[0].downVotesBy).not.toContain(action.payload.userId)
  })
})
