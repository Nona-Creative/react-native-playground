import { prop, propOr, isNil } from 'ramda'

//---------------------------------
// endpoint
//---------------------------------

export const endpoint = (buildReducers, defaultState = null) => (
  (currentState, action) => {
    const reducers = buildReducers()
    const state = currentState == null ? defaultState : currentState
    const actionType = prop('type', action)
    const reducer = propOr(null, actionType, reducers)
    return isNil(reducer) ? state : reducer(state, action)
  }
)
