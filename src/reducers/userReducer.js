import React from 'react';

const initialState = {
    name: '',
    email: '',
    cut: '',
    date: '',
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DATE':
            return {...state, date: action.payload.date}
        break;
        case 'SET_CUT':
            return {...state, cut: action.payload.cut}
    }
    return state;
}