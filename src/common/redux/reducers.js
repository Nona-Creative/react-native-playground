import { mergeDeepRight } from 'ramda'

import { reducer as counter } from '../../modules/Counter'

// ----------------------------------------------
// reducers
// ----------------------------------------------

// ... dev reducers
const devReducers = {}

// ... prod reducers
const reducers = {
  counter,
}

export default __DEV__ ? mergeDeepRight(reducers, devReducers) : reducers
