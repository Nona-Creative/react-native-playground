import React from 'react'
import { SafeAreaView, Button, Text } from 'react-native'

import CommonStyles from '../../common/styles'

const Screen2 = ({ navigation }) => (
  <SafeAreaView style={CommonStyles.container}>
    <Text style={CommonStyles.title}>React Native Playground</Text>
    <Text style={CommonStyles.subTitle}>Screen 2</Text>
    <Button
      style={CommonStyles.button}
      title="Go to Screen 1"
      onPress={() => navigation.navigate('Screen1')}
    />
  </SafeAreaView>
)

export default Screen2
