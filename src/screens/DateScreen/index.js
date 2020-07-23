import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {
    Container,  // View de toda a tela

    Scroll,     // View que realiza o scroll

    SvgView,    // View que contém o SVG

    TextView,   // View onde fica os textos
    BigText,    // Texto grande
    SmallText   // Texto pequeno
    
} from './style';

import MonthView from '../../components/MonthComponent';
import DayView from '../../components/DayComponent';
import Svg from '../../assets/svg/undraw_calendar_dutt.svg'
import Icon from 'react-native-vector-icons/FontAwesome';
import BtnComponent from '../../components/BtnComponent';

export default () => {
    const navigation = useNavigation();
    let today = new Date();

    const [selectMonth, setSelectMonth] = useState(today.getMonth());      
    const [selectDay, setSelectDay] = useState(today.getDate());            

    const month = useSelector(state => state.user.month);
    const day = useSelector(state => state.user.day);
    
    function goToHour() {
        if(day) {
            navigation.navigate('hour');
        } else {
            alert('selecione um dia pls');
        }
    }

    return (
        <Container>
            <BtnComponent onPress={() => goToHour()} width="60px" height="60px" radius="100px" bgColor={day?'#3ED3A1':'#ccc'} style={{zIndex: 9999, position: 'absolute', right: 15, top: 15}}>
                <Icon name="arrow-right" size={25} color="#333"/>
            </BtnComponent>

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