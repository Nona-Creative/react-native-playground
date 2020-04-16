import React from 'react'
import { SafeAreaView, Button, Text } from 'react-native'

import CommonStyles from '../../common/styles'

const Screen1 = ({ navigation }) => (
  <SafeAreaView style={CommonStyles.container}>
    <Text style={CommonStyles.title}>React Native Playground</Text>
    <Text style={CommonStyles.subTitle}>Screen 1</Text>
    <Button
      style={CommonStyles.button}
      title="Go to Screen 2"
      onPress={() => navigation.navigate('Screen2')}
    />
  </SafeAreaView>
)

export default Screen1
