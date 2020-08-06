import React, {useState, useEffect} from 'react';
import BtnComponent from '../../components/BtnComponent';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import uuid from 'uuid/v4';
import ModalComponent from '../../components/ModalComponent';

import { Pressable, Alert } from 'react-native';
import {
    TextView,    // View de bem-vindo
    SmallText,        // Texto grande de Bem-Vindo
} from '../../components/TextView';

import {
    Container,

    Scroll,

    Texto,

    DurationView,
    Input,

    BtnText,

    CutsView,
    ItemView,
} from './style';

export default () => {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [cuts, setCuts] = useState([]); // array
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');

    const dark = useSelector(state => state.user.dark);
    function addCut() {
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
                navigation.reset({
                    index: 0,
                    routes: [
                        { name: 'addcuts' },
                    ]
                })
                alert('Corte/Serviço adicionado com sucesso');
            }).catch(error => {
                alert('Algum erro aconteceu, tente novamente mais tarde');
            })
        }
    }

    function deleteCut(id) {
        firestore()
        .collection('cuts')
        .doc(id)
        .delete()
        .then(() => {
            alert('Serviço deletado');
        })
    }

    function editCut(name, id) {
        Alert.alert(
            name,
            "O que você deseja fazer?",
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: "Editar",
                onPress: () => console.log("Edit")
              },
              { text: "Deletar", onPress: () => deleteCut(id) }
            ],
            { cancelable: false }
        );
    }

    useEffect(() => {
        const subscriber = firestore()
        .collection('cuts')
        .onSnapshot(querySnapshot => {
            const cutsArray = [];

            querySnapshot.forEach(documentSnapshot => {
                cutsArray.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,

                });
            });

            setCuts(cutsArray);
        });

        return () => subscriber();
    }, [])

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
            <Scroll>

                <Texto color={color}> Adicione novos cortes </Texto>

                <DurationView>
                    <Input color={color} bdColor={color} placeholderTextColor={placeColor} placeholder="nome do corte/serviço (infantil, padrão + barba)" onChangeText={n=>setName(n)} />
                    <Input color={color} bdColor={color} placeholderTextColor={placeColor} placeholder="Duração (0~30 minutos)" onChangeText={d=>setDuration(d)} />
                    <Input color={color} bdColor={color} placeholderTextColor={placeColor} placeholder="Preço" onChangeText={p=>setPrice(p)} /> 
                    

                    <BtnComponent mTop="20px" onPress={() => addCut()} bgColor={color} width="90%" radius="100px">
                        <BtnText color={bg}> Finalizar </BtnText>
                    </BtnComponent>
                </DurationView>    

                <CutsView>

                    <Texto color="rgba(0, 0, 0, 0.5)" style={{fontSize: 18}}> Aqui estão os cortes que você já adicionou (aperte no corte para editar, e segure para deletar) </Texto>
                    
                    {cuts.map((c, k) => (
                        <ItemView key={k}>
                            <Pressable onPress={() => editCut(c.name, c.id)} onLongPress={() => deleteCut(c.id)}
                            style={{
                                flexDirection:'row', backgroundColor: 'transparent', 
                                color: '#333', height: 60, width: '90%', borderRadius: 100, justifyContent: 'center',
                                alignItems: 'center', borderColor: '#333', borderWidth: 1                            
                            }}
                            >
                                <BtnText color={color}> {c.name} </BtnText>
                            </Pressable>
                        </ItemView>
                    ))}
                </CutsView>
            </Scroll>
        </Container>
    );
}
