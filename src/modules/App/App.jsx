import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Screen1 from '../Screen1'
import Screen2 from '../Screen2'

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ title: 'Screen 1' }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ title: 'Screen 2' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
