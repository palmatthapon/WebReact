import { Actions } from '../actions'
const initialStats ={
  score:0,
  minScoreboard:0
}

const scoreReducer = (state = initialStats, action) => {
  switch (action.type) {
    case Actions.ADD_SCORE:
      return {score : action.score,
        minScoreboard : state.minScoreboard
      }
    case Actions.CLEAR_SCORE:
      return {score : action.score,
        minScoreboard : state.minScoreboard
      }
    case Actions.ADD_MINSCOREBOARD:
      return {
        score:state.score,
        minScoreboard : action.minScoreboard
      }
    default:
      return state
  }
}

export default scoreReducer