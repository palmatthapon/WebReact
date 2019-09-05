
var initialState = {
    score: 0
}

function scoreReducer(state = initialState.score, action) {
    switch (action.type) {
        case 'ADD_SCORE':
            return action.score
        default:
            return state
    }
}

export default scoreReducer;
