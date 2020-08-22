import React, {useState} from 'react';
import BtnComponent from '../../components/BtnComponent';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import uuid from 'uuid/v4';

import {
    SmallText,      // Texto pequeno de introdução
} from '../../components/TextView';

import {    
    Container,      // Tela

    Scroll,         // Permite a rolagem da tela

    AddView,       // View pai
    AddInput,      // Caixas de Input
    InputText,      // Texto do Input
    
    BtnText,        // Texto do BtnComponent
} from './style';

export default () => {
    const navigation = useNavigation();
    
    /** Criando constantes que receberão valores ao usuário(admin) clicar no Button adicionar */
    const [name, setName] = useState();
    const [duration, setDuration] = useState();
    const [price, setPrice] = useState();

    function AddCut() {     // Essa função cria um document na collection "cuts" no firebase
        let id = uuid();    // Random ID 

        if(!name || !duration || !price) {      // Todos os Inputs precisam está preenchidos
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

                <AddView>

                    <AddInput onChangeText={n=>setName(n)} placeholder="Corte/Serviço"/>
                    <AddInput onChangeText={d=>setPrice(d)} placeholder="Preço"/>
                    <AddInput onChangeText={p=>setDuration(p)} placeholder="Duração (15~30 minutos)"/>

                    <BtnComponent underlayColor="#B43718" onPress={() => AddCut()} width="90%" bgColor="#E76F51" radius="100px" mTop="30px">
                        <BtnText> Adicionar </BtnText> 
                    </BtnComponent>

                    </AddView>
                </Scroll>
        </Container>
    );
}