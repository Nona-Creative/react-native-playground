import { connect } from 'react-redux'

import Counter from './Counter'
import { decrementCount, incrementCount } from './Counter.actions'

const mapStateToProps = ({ counter }) => {
  return { counter }
}

const mapDispatchToProps = dispatch => ({
  onIncrement: (amount) => {
    dispatch(incrementCount(amount))
  },
  onDecrement: (amount) => {
    dispatch(decrementCount(amount))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)
