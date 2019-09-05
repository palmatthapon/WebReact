
var initialState = {
    person:[]
}

function personReducer(state = initialState.person, action) {
    switch (action.type) {
        case 'ADD_PERSON':
            return action.person
        default:
            return state
    }
}

export default personReducer;