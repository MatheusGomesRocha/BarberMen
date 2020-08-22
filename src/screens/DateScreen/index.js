import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import MonthView from '../../components/MonthComponent';
import DayView from '../../components/DayComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
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
    let today = new Date();                                             // Iniciando uma nova data
    const [selectMonth, setSelectMonth] = useState(today.getMonth());   // Pegando mês atual   
    const [selectDay, setSelectDay] = useState(today.getDate());        // Pegando dia atual    

    const day = useSelector(state => state.user.day);
    
    function goToHour() {       // Function que é realizada ao clicar no Button "seguinte" caso já tenha selecionado um dia para ir
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
                <SmallText color="#434343"> 
                    Agende o Dia/Mês que deseja ser atendido
                </SmallText>

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