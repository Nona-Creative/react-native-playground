import React from 'react'
import { AppRegistry } from 'react-native'

import App from './src/modules/App'
import { name as appName } from './app.json'

const Wrapper = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <App />
)

AppRegistry.registerComponent(appName, () => Wrapper)
