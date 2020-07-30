import React, {useState} from 'react';
import BtnComponent from '../../components/BtnComponent';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import uuid from 'uuid/v4';

import {
    Container,

    Input,

    DurationView,
    Texto,

    BtnText
} from './style';

export default () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');

    const dark = useSelector(state => state.user.dark);

    function addCut() {
        if(!name || !duration || !price) {
            alert('Todos os campos são obrigatórios');
        } else {
            firestore()
            .collection('cuts')
            .add({
                id: uuid(),
                name: name,
                duration: duration,
            }).then(() => {
                alert('Corte adicionado com sucesso');
                setName('');
                setDuration('');
                setPrice('');
            }).catch(error => {
                alert('Algum erro aconteceu, tente novamente mais tarde');
            })
        }
        
    }

    let bg = '#fff';    // Usando para o background e para cor do BtnText
    let color = '#333'; // Usando para cor do Texto e para background do BtnComponent
    let placeColor = 'rgba(0, 0, 0, 0.5)';
    if(dark) {
        bg = '#333';
        color = '#fff';
        placeColor = 'rgba(255, 255, 255, 0.5)';
    }

    return(
        <Container bgColor={bg}>

        <DurationView>
            <Input color={color} bdColor={color} placeholderTextColor={placeColor} placeholder="nome do corte" onChangeText={n=>setName(n)} />
            <Input color={color} bdColor={color} placeholderTextColor={placeColor} placeholder="Duração (0~30 minutos)" onChangeText={d=>setDuration(d)} />
            <Input color={color} bdColor={color} placeholderTextColor={placeColor} placeholder="Preço" onChangeText={p=>setPrice(p)} /> 
            

            <BtnComponent mTop="20px" onPress={() => addCut()} bgColor={color} width="90%" radius="100px">
                <BtnText color={bg}> Finalizar </BtnText>
            </BtnComponent>
            </DurationView>    
        </Container>
    );
}