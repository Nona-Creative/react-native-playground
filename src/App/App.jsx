import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {HomeScreen} from '../HomeScreen/HomeScreen';
import {Contacts} from '../Contacts/Contacts';

const Stack = createStackNavigator();

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
                  name="Home"
                  component={HomeScreen}
                  options={{title: 'Home Page'}}
                />
                <Stack.Screen
                  name="Details"
                  npm
                  run
                  component={Contacts}
                  options={{title: 'Contacts'}}
                />
              </View>
            </View>
          </SafeAreaView>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

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
});

export default App;
