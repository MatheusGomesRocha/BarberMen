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
    Header,
    HeaderLeft,
    HeaderRight,
    HeaderButton,
} from '../../components/HeaderComponent';

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


    return (
        <Container>
            <Header>
                <HeaderButton underlayColor="transparent"  onPress={() => navigation.goBack()}>
                    <HeaderLeft>  <Icon name="angle-left" size={22} /> Dia/Mês </HeaderLeft>
                </HeaderButton>
                <HeaderButton underlayColor="transparent" onPress={() => goToHour()}>
                    <HeaderRight color={selectDay?'#000':'#434343'}> Seguinte <Icon name="angle-right" size={18} /> </HeaderRight>
                </HeaderButton>
            </Header>

            <Scroll>
                <TextView>
                    <SmallText color="#434343"> 
                        Agende o Dia/Mês que deseja ser atendido
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