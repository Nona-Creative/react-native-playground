import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import CommonStyles from '../../common/styles'

const App = () => {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Text style={CommonStyles.title}>React Native Playground</Text>
    </SafeAreaView>
  )
}

export default App
