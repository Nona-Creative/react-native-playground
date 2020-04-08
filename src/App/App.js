import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>React Native Playground</Text>
          </View>
        </View>
      </SafeAreaView>
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
