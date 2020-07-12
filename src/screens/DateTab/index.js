import React, {useState} from 'react';
import { Dimensions } from 'react-native';

import {
    Container,
    Scroll,
    MonthText,
    Texto
} from './style';

import MonthView from '../../components/MonthComponent';
import DayView from '../../components/DayComponent';

export default () => {
    let today = new Date();

    const [selectMonth, setSelectMonth] = useState(today.getMonth());
    const [selectDay, setSelectDay] = useState(today.getDate());


    return (
        <Container>
            <Scroll>
                <MonthView
                selectMonth={selectMonth}
                setMonth={setSelectMonth}
                />
                <DayView
                    selectMonth={selectMonth}
                    selectDay={selectDay}
                    setSelectDay={setSelectDay}
                />
            </Scroll>
        </Container>
    );
}