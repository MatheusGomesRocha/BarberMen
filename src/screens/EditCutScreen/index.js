import React, {useState} from 'react';
import BtnComponent from '../../components/BtnComponent';
import {useRoute, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import {
    Container,

    EditView,
    InputView,
    InputText,
    EditInput,

    BtnText,
} from './style';

export default () => {
    const route = useRoute();
    const navigation = useNavigation();
    

    const [newName, setNewName] = useState();
    const [newDuration, setNewDuration] = useState();
    const [newPrice, setNewPrice] = useState();

    function UpdateData() {
           
    }

    return(
        <Container>

            <EditView>

                <InputView>
                    <InputText> Nome do corte </InputText>
                    <EditInput onChangeText={n=>setNewName(n)}  />
                </InputView>
                <InputView>
                    <InputText> Duração </InputText>
                    <EditInput onChangeText={d=>setNewDuration(d)}/>
                </InputView>
                <InputView>
                    <InputText> Preço </InputText>
                    <EditInput onChangeText={p=>setNewPrice(p)}/>
                </InputView>

                <BtnComponent onPress={() => UpdateData()} width="90%" bgColor="#333" radius="100px" mTop="30px">
                    <BtnText> Salvar alterações </BtnText> 
                </BtnComponent>

            </EditView>

        </Container>
    );
}