import { Actions } from '.'

export const addScore = score => ({
    type: Actions.ADD_SCORE,
    score:score
  })

  export const clearScore = score => ({
    type: Actions.CLEAR_SCORE,
    score:0
  })

  export const addMinScoreboard = minScoreboard => ({
    type: Actions.ADD_MINSCOREBOARD,
    minScoreboard:minScoreboard
  })