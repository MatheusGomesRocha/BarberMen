import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import MonthView from '../../components/MonthComponent';
import DayView from '../../components/DayComponent';
import Svg from '../../assets/svg/undraw_date_picker_gorr.svg'
import Icon from 'react-native-vector-icons/FontAwesome';
import BtnComponent from '../../components/BtnComponent';

import {
    TextView,    // View de bem-vindo
    BigText,        // Texto grande de Bem-Vindo
    SmallText,      // Texto pequeno de introdução
} from '../../components/TextView';

import {
    Container,  // View de toda a tela

    Scroll,     // View que realiza o scroll

    SvgView,    // View que contém o SVG
    
} from './style';

export default () => {
    const navigation = useNavigation();
    let today = new Date();
    const [selectMonth, setSelectMonth] = useState(today.getMonth());      
    const [selectDay, setSelectDay] = useState(today.getDate());            

    const day = useSelector(state => state.user.day);
    
    function goToHour() {
        if(day) {
            navigation.navigate('hour');
        } else {
            alert('selecione um dia pls');
        }
    }

    const dark = useSelector(state=>state.user.dark);

    let bg = '#fff';
    let color = '#333';
    let small = 'rgba(0, 0, 0, 0.5)'
    if(dark) {
        bg = '#333';
        color = '#fff';
        small = 'rgba(255, 255, 255, 0.5)'
    }

    return (
        <Container bgColor={bg}>
            <BtnComponent underlayColor={day?'#3AA3A1':'#bbb'} onPress={() => goToHour()} width="60px" height="60px" radius="100px" bgColor={day?'#3ED3A1':'#ccc'} style={{zIndex: 9999, position: 'absolute', right: 15, top: 15}}>
                <Icon name="arrow-right" size={25} color="#333"/>
            </BtnComponent>

            <Scroll>

                <SvgView>
                    <Svg width={280} height={260} />
                </SvgView>

                <TextView>
                    <BigText color={color}> Escolha o dia </BigText>
                    <SmallText color={small}> 
                        Veja os dias disponíveis e posteriormente selecione horário que 
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