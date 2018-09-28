import {createStore} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

//state
const initialState = {
    guests: [],
    rooms: [],
    bookings: [],
    


}

//actions


export function addGuest (guest){
    return { type: "ADD_GUEST", payload: guest}
}
export function removeGuest (guest){
    return { type: "REMOVE_GUEST", payload:guest }
}

export function cleanRoom (room) {
    return { type: "CLEAN_ROOM", payload: room}
}
export function dirtyRoom (room) {
    return { type: "DIRTY_ROOM", payload: room}
}

export function bookGuest (guest,room){
    return { type: "BOOK_GUEST", payload: {guest,room}}
}

export function checkoutGuest (guest,room) {
    return { type: "CHECK_OUT_GUEST", payload: {guest,room}}
}



//reducer

function reducer(state, action){
    if (action.type === "ADD_GUEST"){
    return {
        ...state,
        guests : [...state.guests, action.payload]
        
    }
    }
if (action.type === "REMOVE_GUEST"){
    return {
        ...state,
        guests:state.guests.filter(g => g !== action.payload),
        bookings:state.bookings.filter( b => b.guest !== action.payload)
    }
    }
if (action.type === "CLEAN_ROOM"){
    return {
        ...state,
        rooms: [...state.rooms, action.payload]
    }
    }
if (action.type === "DIRTY_ROOM"){
    return {
        ...state,
        rooms: state.rooms.filter ( r => r !== action.payload),
        bookings: state.bookings.filter( b => b.room !== action.payload)
    }
    }   
if (action.type === "BOOK_GUEST"){
    return {
        ...state,
        bookings: [...state.bookings, action.payload]
    }
    }
if (action.type === "CHECK_OUT_GUEST") {
    const { guest, room} = action.payload
    return {
        ...state,
        bookings: state.bookings.filter(b => 
            !(b.guest === guest && b.room === room))
    }
    }   
    
    return state
}

//store
const store = createStore(reducer, initialState, composeWithDevTools());

export default store