import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native'

import App from './App'

// eslint-disable-next-line react/jsx-filename-extension
storiesOf('App', module).add('Basic App Page', () => <App />)
