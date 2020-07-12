import React from 'react';
import { Dimensions } from 'react-native';

import {
    Container,
    Scroll,
    MonthText,
    Texto
} from './style';

import MonthView from '../../components/MonthComponent';
import DayView from '../../components/DayComponent';

const screenSize = Math.round(Dimensions.get('window').width);  // Pegando tamanho da tela do celular
let dayWPx = Math.round(screenSize / 7) + "px";

export default () => {
    let date = new Date();

    let Month = date.getMonth() + 1;
    let MonthName = null;

    switch(Month) {
        case '1':
            MonthName = 'Janeiro';
        break;
        case '7':
            MonthName = 'Julho';
        break;
    }


    return (
        <Container>
                <MonthView
                />
        </Container>
    );
}