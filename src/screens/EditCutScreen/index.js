import React, {useState} from 'react';
import BtnComponent from '../../components/BtnComponent';
import {useRoute, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import SvgAdd from '../../assets/svg/undraw_add_tasks_mxew.svg';     // SVG BARBER
import uuid from 'uuid/v4';

import {
    TextView,    // View de bem-vindo
    BigText,        // Texto grande de Bem-Vindo
    SmallText,      // Texto pequeno de introdução
} from '../../components/TextView';

import {
    Container,

    Scroll,

    SvgView,

    EditView,
    InputView,
    InputText,
    EditInput,

    BtnText,
} from './style';

export default () => {
    const navigation = useNavigation();
    
    const [name, setName] = useState();
    const [duration, setDuration] = useState();
    const [price, setPrice] = useState();

    function AddCut() {
        let id = uuid();

        if(!name || !duration || !price) {
            alert('Todos os campos são obrigatórios');
        } else {
            firestore()
            .collection('cuts')
            .doc(id)
            .set({
                id: id,
                name: name,
                duration: duration,
                price: price,
            }).then(() => {
                alert('Corte/Serviço adicionado com sucesso');
            }).catch(error => {
                alert('Algum erro aconteceu, tente novamente mais tarde');
            })
        }
    }

    return(
        <Container>
            <Scroll>

                <SmallText color="#434343" style={{marginBottom: 30}}> 
                    Adicione um novo serviço
                </SmallText>

                <EditView>

                    <InputView>
                        <EditInput onChangeText={n=>setName(n)} placeholder="Corte/Serviço"/>
                    </InputView>
                    <InputView>
                        <EditInput onChangeText={d=>setPrice(d)} placeholder="Preço"/>
                    </InputView>
                    <InputView>
                        <EditInput onChangeText={p=>setDuration(p)} placeholder="Duração (15~30 minutos)"/>
                    </InputView>

                    <BtnComponent underlayColor="#B43718" onPress={() => AddCut()} width="90%" bgColor="#E76F51" radius="100px" mTop="30px">
                        <BtnText> Adicionar </BtnText> 
                    </BtnComponent>

                    </EditView>
                </Scroll>
        </Container>
    );
}