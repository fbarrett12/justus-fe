let defaultState = {
    user: {},
    currentCause: {},
    causes: [],
    userCauses: []
}

export default function reducer(state = defaultState, action){
    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user: action.payload 
            }

        case 'CLEAR_USER': 
            return {
                ...state,
                user: {}
            }

        case 'SET_CURRENT_CAUSE' :
            return {
                ...state,
                currentCause: action.payload 
            }

        case 'LOAD_CAUSES':
            return {
                ...state,
                causes: [...state.causes, action.payload]
            }
            
        case 'CLEAR_CURRENT_CAUSE':
            return {
                ...state,
                currentCause: {}
            }

        default:
            return state
    }
}