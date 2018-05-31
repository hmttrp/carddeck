import xprod from '../xprod'

const testCases = [
  {
    a: [],
    b: [],
    result: []
  },
  {
    a: [],
    b: ['a'],
    result: []
  },
  {
    a: [1],
    b: [],
    result: []
  },
  {
    a: undefined,
    b: undefined,
    result: []
  },
  {
    a: [1],
    b: ['a'],
    result: [[1, 'a']]
  },
  {
    a: [1, 2, 3],
    b: ['a'],
    result: [[1, 'a'], [2, 'a'], [3, 'a']]
  },
  {
    a: [1, 2, 3],
    b: ['a', 'b'],
    result: [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b'], [3, 'a'], [3, 'b']]
  },
  {
    a: [1],
    b: ['a', 'b'],
    result: [[1, 'a'], [1, 'b']]
  }
]

it('returns a product of the two lists', () => {
  testCases.forEach(({ a, b, result }) => {
    expect(xprod(a, b)).toEqual(result)
  })
})
