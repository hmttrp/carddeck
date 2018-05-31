import Suit from './suit'
import Rank from './rank'
import xprod from './utils/xprod'
import createCard from './card'

const suits = Object.values(Suit)
const ranks = Object.values(Rank)

const createDeck = () => {
  const cards = xprod(suits, ranks).map(([suit, rank]) =>
    createCard(suit, rank)
  )

  return {
    cards
  }
}

export default createDeck
