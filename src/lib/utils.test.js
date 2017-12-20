import { partial, pipe } from './utils'

const inc = (num) => num + 1
const dbl = (num) => num * 2

test('partial applies the first argument ahead of time', () => {
  const add = (a, b) => a + b
  const inc = partial(add, 1)
  const result = inc(2)

  expect(result).toEqual(3)
})

test('partial applies more than two arguments ahead of time', () => {
  const add_three = (a, b, c) => a + b + c
  const sum = partial(add_three, 1, 2)
  const result = sum(3)

  expect(result).toEqual(6)
})


test('pipe passes the results of inc to dbl', () => {
  const pipeline = pipe(inc, dbl)
  const result = pipeline(2)
  expect(result).toBe(6)
})

test('pipe passes the results of dbl to inc', () => {
  const pipeline = pipe(dbl, inc)
  const result = pipeline(2)
  expect(result).toBe(5)
})

test('pipe works with more than 2 functions', () => {
  const pipeline = pipe(inc, dbl, inc, dbl)
  const result = pipeline(1)

  expect(result).toBe(10)
})
