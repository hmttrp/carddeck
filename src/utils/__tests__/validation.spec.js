import Suit from '../../suit'
import { isOfEnum } from '../validation'

it('returns true when the string is part of the enum', () => {
  expect(isOfEnum(Suit, Suit.Clubs)).toBe(true)
})

it('returns false when the string is not part of the enum', () => {
  expect(isOfEnum(Suit, 'invalid string')).toBe(false)
})
