import assert from 'assert'

import SUT from './Counter.reducer'
import { decrementCount, incrementCount } from './Counter.actions'

describe('modules/Counter', () => {
  describe('incrementCountByAmount', () => {
    it('should increment count by provided amount', () => {
      // given ... count is currently 6
      const state = 6

      // when ... we increment by 3
      const result = SUT(state, incrementCount(3))

      // then ... should update state to 9
      assert.deepEqual(result, 9)
    })
  })

  describe('decrementCountByAmount', () => {
    it('should decrement count by provided amount', () => {
      // given ... count is currently 6
      const state = 6

      // when ... we decrement by 5
      const result = SUT(state, decrementCount(5))

      // then ... should update state to 1
      assert.deepEqual(result, 1)
    })
  })
})
