import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';
import firestore from '@react-native-firebase/firestore';

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
            <Scroll>
            <TextView>
                <BigText> Finalize seu atendimento </BigText>
                <SmallText> Aqui contém tudo que você escolheu, revise para ver se está tudo correto, se estiver, finalize e aguarde para ser atendido</SmallText> 
            </TextView>
            <InfoView>
                <InfoText> Corte: {cutName} </InfoText>
                <InfoText> Data: {day}/{month} </InfoText>
                <InfoText> Horário: {hour} </InfoText>
                <InfoText> Duração: {duration} </InfoText>
            </InfoView>

            <BtnView>
                <BtnComponent onPress={() => SetAppointment()} width="90%" bgColor="#333" radius="100px" style={{marginTop: 50}}>
                    <BtnText>Finalizar</BtnText> 
                </BtnComponent>
            </BtnView>
            </Scroll>
            
        </Container>
    );
}