import { Actions } from '../actions'

const scoreReducer = (state = Actions.ADD_SCORE, action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return action.score
    default:
      return state
  }
}

export default scoreReducer