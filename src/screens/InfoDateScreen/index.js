import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Header,
    HeaderLeft,
    HeaderRight,
    HeaderButton,
    Teste
} from '../../components/HeaderComponent';

import {
    TextView,    // View de bem-vindo
    BigText,        // Texto grande de Bem-Vindo
    SmallText,      // Texto pequeno de introdução
} from '../../components/TextView';

import { 
    Container,  // View toda a tela

    Scroll,     // View de scroll

    InfoView,   // View com a info
    InfoText,   // Texto das info
    
    BtnView,    // View do BtnComponent
    BtnText,    // Texto do BtnComponent
} from './style';

export default () => {
    const navigation = useNavigation();

    const cutName = useSelector(state=> state.user.cut);
    const month = useSelector(state=> state.user.month);
    const day = useSelector(state=> state.user.day);
    const hour = useSelector(state => state.user.hour);
    const duration = useSelector(state => state.user.duration);

    function SetAppointment() {
        firestore()
        .collection('appointments')
        .add({
            cut: cutName,
            day: day+'/'+month,
            hour: hour + ' ',
            duration: duration
        }).then(() => {
            alert('Horário agendado. Cerfique-se de chegar antes do horário marcado para não ocorrer problemas')
            navigation.reset({
                index: 0,
                routes: [
                    { name: 'home' },
                ]
            });
        })

    }

    return (
        <Container>

            <BtnView>
                <BtnComponent onPress={() => SetAppointment()} width="80px" height="80px" bgColor="#E76F51" radius="100px" style={{marginTop: 50}}>
                    <BtnText> <Icon name="angle-right" size={40} /> </BtnText> 
                </BtnComponent>
            </BtnView>

            <Scroll>

                <TextView style={{marginLeft: 20, marginRight: 20}}>
                    <SmallText> Confira se os dados estão corretos e clique em "finalizar" para confirmar seu agendamento </SmallText> 
                </TextView>
                <InfoView>
                    <InfoText> Dia/Mês: {day}/{month} </InfoText>
                    <InfoText> Horário: {hour} </InfoText>
                    <InfoText> Serviço/Corte: {cutName} </InfoText>
                    <InfoText> Duração: {duration} </InfoText>
                </InfoView>

            </Scroll>
            
        </Container>
    );
}