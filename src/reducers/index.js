import { ADD_DATA, REMOVE_DATA } from '../constants/action-types'

const initialState = {
    data: []
};

function rootReducer (state = initialState, action){
    if (action.type === ADD_DATA){
        return Object.assign({}, state, {
            data: state.data.concat(action.payload)
        });
    }
    if (action.type === REMOVE_DATA){
        return Object.assign({}, state, {
            data: [
                ...state.data.slice(0, action.payload.id),
                ...state.data.slice(action.payload.id + 1)
            ]
        });
    }
    return state;
};

export default rootReducer;
