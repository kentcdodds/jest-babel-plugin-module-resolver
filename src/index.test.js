import _ from 'underscore'
import lodash from 'lodash'
import * as math from '<utils>/math'

test('lodash alias works', () => {
  expect(lodash).toBe(_)
})

test('add', () => {
  expect(math.add(1, 2)).toBe(3)
})

test('subtract', () => {
  expect(math.subtract(5, 2)).toBe(3)
})
