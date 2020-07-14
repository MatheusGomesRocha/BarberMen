import React, {useState} from 'react';

import {
    Container,

    Scroll,

    SvgView,

    TextView,
    BigText,
    SmallText
    
} from './style';

import MonthView from '../../components/MonthComponent';
import DayView from '../../components/DayComponent';
import Svg from '../../assets/svg/undraw_calendar_dutt.svg'

export default () => {
    let today = new Date();

    const [selectMonth, setSelectMonth] = useState(today.getMonth());
    const [selectDay, setSelectDay] = useState(today.getDate());


    return (
        <Container>
            <Scroll>

                <SvgView>
                    <Svg width={280} height={260} />
                </SvgView>

                <TextView>
                    <BigText> Escolha a data </BigText>
                    <SmallText> 
                        Veja as datas disponíveis e escolha o dia e horário que 
                        você prefere para ser atendido 
                    </SmallText>
                </TextView>

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