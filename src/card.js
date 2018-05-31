import Rank from './rank'
import Suit from './suit'
import { isOfEnum } from './validation'

const createCard = (suit, rank) => {
  if (!isOfEnum(Suit, suit)) {
    throw Error('Provided suit is not a valid value')
  }

  if (!isOfEnum(Rank, rank)) {
    throw Error('Provided rank is not a valid value')
  }

  return {
    suit,
    rank
  }
}

export default createCard
