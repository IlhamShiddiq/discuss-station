import { ActionType } from './action'

const navigationsReducer = (navigations = [], action = {}) => {
  switch (action.type) {
    case ActionType.SET_NAVIGATION:
      return action.payload
    default:
      return navigations
  }
}

export {
  navigationsReducer
}
