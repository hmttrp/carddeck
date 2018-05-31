import Rank from '../rank'
import Suit from '../suit'
import createCard from '../card'

Object.values(Suit).forEach(suit => {
  Object.values(Rank).forEach(rank => {
    it(`creates a ${rank} of ${suit}`, () => {
      const card = createCard(suit, rank)

      expect(card).toEqual({ suit, rank })
    })
  })
})

it('throws an error when the suit is invalid', () => {
  expect(() => createCard('invalid', Rank.Ace)).toThrow(
    'Provided suit is not a valid value'
  )
})

it('throws an error when the rank is invalid', () => {
  expect(() => createCard(Suit.Clubs, 'invalid')).toThrow(
    'Provided rank is not a valid value'
  )
})
