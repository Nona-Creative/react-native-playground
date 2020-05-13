import React from 'react'

import App from './App'

// Note: test renderer must be required after react-native.
// eslint-disable-next-line import/order
import renderer from 'react-test-renderer'

describe('App', () => {
  it('should successfully render', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    renderer.create(<App />)
  })
})
