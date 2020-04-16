import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import Screen1 from '../Screen1'
import Screen2 from '../Screen2'

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <SafeAreaView>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>React Native Playground</Text>
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
              </View>
            </View>
          </SafeAreaView>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.black,
  },
})

export default App
