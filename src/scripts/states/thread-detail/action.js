import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  SET_THREAD_DETAIL: 'SET_THREAD_DETAIL',
  UNSET_THREAD_DETAIL: 'UNSET_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRAL_VOTE_THREAD_DETAIL: 'NEUTRAL_VOTE_THREAD_DETAIL',
  ADD_THREAD_COMMENT: 'ADD_THREAD_COMMENT',
  UP_VOTE_THREAD_COMMENT: 'UP_VOTE_THREAD_COMMENT',
  DOWN_VOTE_THREAD_COMMENT: 'DOWN_VOTE_THREAD_COMMENT',
  NEUTRAL_VOTE_THREAD_COMMENT: 'NEUTRAL_VOTE_THREAD_COMMENT'
}

const receiveThreadDetailActionCreator = (threadDetail) => {
  return {
    type: ActionType.SET_THREAD_DETAIL,
    payload: {
      threadDetail
    }
  }
}

const clearThreadDetailActionCreator = () => {
  return {
    type: ActionType.UNSET_THREAD_DETAIL
  }
}

const upVoteThreadActionCreator = (userId) => {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId
    }
  }
}

const downVoteThreadActionCreator = (userId) => {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId
    }
  }
}

const neutralVoteThreadActionCreator = (userId) => {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
    payload: {
      userId
    }
  }
}

const addCommentActionCreator = (comment) => {
  return {
    type: ActionType.ADD_THREAD_COMMENT,
    payload: {
      comment
    }
  }
}

const upVoteCommentActionCreator = (userId, commentId) => {
  return {
    type: ActionType.UP_VOTE_THREAD_COMMENT,
    payload: {
      userId,
      commentId
    }
  }
}

const downVoteCommentActionCreator = (userId, commentId) => {
  return {
    type: ActionType.DOWN_VOTE_THREAD_COMMENT,
    payload: {
      userId,
      commentId
    }
  }
}

const neutralVoteCommentActionCreator = (userId, commentId) => {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD_COMMENT,
    payload: {
      userId,
      commentId
    }
  }
}

const asyncReceiveThreadDetail = (threadId) => {
  return async (dispatch) => {
    dispatch(showLoading())
    dispatch(clearThreadDetailActionCreator())
    try {
      const threadDetail = await api.getThreadDetail(threadId)
      dispatch(receiveThreadDetailActionCreator(threadDetail))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncUpVoteThread = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { authUser, threadDetail } = getState()
    dispatch(upVoteThreadActionCreator(authUser.id))
    try {
      await api.upVoteThread(threadDetail.id)
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncDownVoteThread = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { authUser, threadDetail } = getState()
    dispatch(downVoteThreadActionCreator(authUser.id))
    try {
      await api.downVoteThread(threadDetail.id)
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncNeutralVoteThread = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { authUser, threadDetail } = getState()
    dispatch(neutralVoteThreadActionCreator(authUser.id))
    try {
      await api.neutralizeVoteThread(threadDetail.id)
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncAddComment = (content) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { threadDetail } = getState()
    try {
      const comment = await api.createThreadComment({ id: threadDetail.id, content })
      dispatch(addCommentActionCreator(comment))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncUpVoteComment = (commentId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { authUser, threadDetail } = getState()
    dispatch(upVoteCommentActionCreator(authUser.id, commentId))
    try {
      await api.upVoteComment({ threadId: threadDetail.id, commentId })
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncDownVoteComment = (commentId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { authUser, threadDetail } = getState()
    dispatch(downVoteCommentActionCreator(authUser.id, commentId))
    try {
      await api.downVoteComment({ threadId: threadDetail.id, commentId })
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncNeutralVoteComment = (commentId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { authUser, threadDetail } = getState()
    dispatch(neutralVoteCommentActionCreator(authUser.id, commentId))
    try {
      await api.neutralizeVoteComment({ threadId: threadDetail.id, commentId })
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralVoteThreadActionCreator,
  addCommentActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralVoteCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralVoteThread,
  asyncAddComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment
}
