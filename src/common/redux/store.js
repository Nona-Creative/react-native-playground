import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux'

import { actions as AppActions } from '../../modules/App'
import reducers from './reducers'
import middleware from './middleware'

// ----------------------------------------------
// store
// ----------------------------------------------

const configureStore = () => {
  const composeEnhancers = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ // eslint-disable-line no-underscore-dangle
      // prevents Redux DevTools from re-dispatching all previous actions.
      shouldHotReload: false,
    })
    : compose

  // ... reducer
  const reducer = combineReducers(reducers)

  // ... store
  const store = reduxCreateStore(
    reducer,
    composeEnhancers(
      applyMiddleware(...middleware),
    ),
  )

  // ... initial actions
  store.dispatch(AppActions.init())

  return { store }
}

export default configureStore
