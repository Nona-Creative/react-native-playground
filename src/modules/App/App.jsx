import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import CommonStyles from '../../common/styles'
import Counter from '../Counter'

const App = () => (
  <SafeAreaView style={CommonStyles.container}>
    <Text style={CommonStyles.title}>React Native Playground</Text>
    <Counter />
  </SafeAreaView>
)

export default App
