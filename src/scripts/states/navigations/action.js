const ActionType = {
  SET_NAVIGATION: 'SET_NAVIGATION'
}

const setNavigationActionCreator = (navigations) => {
  return {
    type: ActionType.SET_NAVIGATION,
    payload: navigations
  }
}

export {
  ActionType,
  setNavigationActionCreator
}
