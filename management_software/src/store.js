import {createStore} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

//state
const initialState = {
    occupiedRooms : [],
    entyRooms: [],
    dirtyRooms: [],
    cleanRooms: [],


}

//actions
export function bookGuest (guest,cleanRoom){
    return { type: "BOOKGUEST", payload: {guest,cleanRoom}}
}

export function checkoutGuest (guest,dirtyRoom) {
    return { type: "CHECKOUTGUEST", payload: {guest,dirtyRoom}}
}

export function cleanRoom (room,number) {
    return { type: "CLEANROOM", payload: {room,number}}
}

//reducer

function reducer(state, action){
    if (action.type === "BOOKGUEST"){
    return {
        ...state,
        
    }
    }
}

//store
const store = createStore(reducer, initialState, composeWithDevTools());

export default store