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
    const id = route.params.id;
    const name = route.params.name;
    const duration = route.params.duration;
    const price = route.params.price;

    const [newName, setNewName] = useState();
    const [newDuration, setNewDuration] = useState();
    const [newPrice, setNewPrice] = useState();

    function UpdateData() {
        if(newName || newDuration || newPrice) {
            let nameFire = '';
            let durationFire = '';
            let priceFire = '';

            if(newName) {
                nameFire = newName;
            } else {
                nameFire = name;
            }

            if(newDuration) {
                durationFire = newDuration;
            } else {
                durationFire = duration;
            }

            if(newPrice) {
                priceFire = newPrice;
            } else {
                priceFire = price;
            }

            firestore()
            .collection('cuts')
            .doc(id)
            .update({
                name: nameFire,
                duration: durationFire,
                price: priceFire,                    
            })
            .then(() => {
                alert('Corte editado');
            });
        } else {
            alert('Você não digitou nada');
        }
        
    }
    return(
        <Container>

            <EditView>

                <InputView>
                    <InputText> Nome do corte </InputText>
                    <EditInput onChangeText={n=>setNewName(n)} placeholder={name} />
                </InputView>
                <InputView>
                    <InputText> Duração </InputText>
                    <EditInput onChangeText={d=>setNewDuration(d)} placeholder={duration} />
                </InputView>
                <InputView>
                    <InputText> Preço </InputText>
                    <EditInput onChangeText={p=>setNewPrice(p)} placeholder={price} />
                </InputView>

                <BtnComponent onPress={() => UpdateData()} width="90%" bgColor="#333" radius="100px" mTop="30px">
                    <BtnText> Salvar alterações </BtnText> 
                </BtnComponent>

            </EditView>

        </Container>
    );
}