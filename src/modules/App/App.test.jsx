import 'react-native'
import React from 'react'
import { Provider } from 'react-redux'

import App from './App'
import { store } from '../../common/redux'

// Note: test renderer must be required after react-native.
// eslint-disable-next-line import/order
import { create } from 'react-test-renderer'

describe('modules/App', () => {
  it('should successfully render', () => {
    create(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
})
