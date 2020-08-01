import React from 'react';

const initialState = {
    name: '',
    email: '',
    cut: '',
    day: '',
    month: '',
    hour: '',
    duration: '',
    favorites: [],
    dark:  false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DARK':
            return {...state, dark: action.payload.dark};
        break
        case 'SET_MONTH':
            return {...state, month: action.payload.month};
        break;
        case 'SET_DAY':
            return {...state, day: action.payload.day};
        break;
        case 'SET_HOUR':
            return {...state, hour: action.payload.hour};
        break;           
        case 'SET_CUT':
            return {...state, cut: action.payload.cut};
        break;
        case 'SET_DURATION':
            return {...state, duration: action.payload.duration};
        break;
        case 'SET_EMAIL':
            return {...state, email: action.payload.email};
        break;
        case 'SIGN_OUT':
            return initialState;
        break;
    }
    return state;
}