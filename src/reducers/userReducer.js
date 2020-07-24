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
}

export default (state = initialState, action) => {
    switch(action.type) {
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
    }
    return state;
}