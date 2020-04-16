import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import PropTypes from 'prop-types'

import CommonStyles from '../../common/styles'

const Counter = ({ onIncrement, onDecrement, counter }) => (
  <SafeAreaView style={CommonStyles.container}>
    <Text style={CommonStyles.subTitle}>Counter</Text>
    <Text style={CommonStyles.title}>{ counter }</Text>
    <Button style={CommonStyles.button} onPress={() => onDecrement(2)} title="-" />
    <Button style={CommonStyles.button} onPress={() => onIncrement(2)} title="+" />
  </SafeAreaView>
)

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  count: PropTypes.number,
}

Counter.defaultProps = {
  counter: 0,
}

export default Counter
