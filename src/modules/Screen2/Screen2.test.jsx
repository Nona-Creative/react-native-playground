import 'react-native'
import React from 'react'
import { Screen2 } from './Screen2'
import renderer from 'react-test-renderer'

describe('Screen2', () => {
  it('should successfully render', () => {
    renderer.create(<Screen2/>)
  })
})
