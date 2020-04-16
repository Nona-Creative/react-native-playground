import 'react-native'
import React from 'react'

import Screen2 from './Screen2'

// Note: test renderer must be required after react-native.
// eslint-disable-next-line import/order
import renderer from 'react-test-renderer'

describe('Screen2', () => {
  it('should successfully render', () => {
    renderer.create(<Screen2 />)
  })
})
