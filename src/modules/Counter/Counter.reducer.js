import { endpoint } from '../../common/redux/utils'
import { DECREMENT_COUNT, INCREMENT_COUNT } from './Counter.actions'

const INITIAL_STATE = 0

//---------------------------------
// reducers
//---------------------------------

const incrementCountByAmount = (state, { payload }) => state + payload

const decrementCountByAmount = (state, { payload }) => state - payload

//---------------------------------
// action -> reducer mapping
//---------------------------------

const reducers = () => ({
  [INCREMENT_COUNT]: incrementCountByAmount,
  [DECREMENT_COUNT]: decrementCountByAmount,
})

export default endpoint(reducers, INITIAL_STATE)
