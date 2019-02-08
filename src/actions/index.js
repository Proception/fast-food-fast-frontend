import { ADD_DATA, REMOVE_DATA } from '../constants/action-types'

export function removeData(payload){
    return { type: REMOVE_DATA, payload }
};

export function addData(payload){
    return { type: ADD_DATA, payload }
};