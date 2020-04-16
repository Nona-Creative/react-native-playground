import 'react-native'
import React from 'react'
import sinon from 'sinon'

import Counter from './Counter'

// Note: test renderer must be required after react-native.
// eslint-disable-next-line import/order
import { create } from 'react-test-renderer'

describe('modules/Counter', () => {
  let sandbox = null

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should successfully render', () => {
    const onIncrementStub = sandbox.stub()
    const onDecrementStub = sandbox.stub()
    const component = create(
      <Counter
        onIncrement={onIncrementStub}
        onDecrement={onDecrementStub}
      />
    )
  })
})
