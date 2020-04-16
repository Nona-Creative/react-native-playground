import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './src/common/redux'
import App from './src/modules/App'
import { name as appName } from './app.json'

const Wrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Wrapper)
