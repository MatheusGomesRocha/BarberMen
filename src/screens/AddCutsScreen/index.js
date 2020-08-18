import React, {useState, useEffect} from 'react';
import BtnComponent from '../../components/BtnComponent';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ModalComponent from '../../components/ModalComponent';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cutlist from '../../FlatListsComponents/CutManage';

import { Pressable, Alert } from 'react-native';
import {
    TextView,    // View de bem-vindo
    SmallText,        // Texto grande de Bem-Vindo
} from '../../components/TextView';

import {
    Header,
    HeaderLeft,
    HeaderRight,
    HeaderButton,
    Teste
} from '../../components/HeaderComponent';


import {
    Container,

    Scroll,

    Texto,

    DurationView,
    Input,

    BtnText,

    CutsView,
    ItemView,

    Flat
} from './style';

export default () => {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [cuts, setCuts] = useState([]); // array
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const cutId = useSelector(state => state.user.cut);
    const dark = useSelector(state => state.user.dark);

    function deleteCut(id) {
        firestore()
        .collection('cuts')
        .doc(id)
        .delete()
        .then(() => {
            alert('Serviço deletado');
        })
    }

    function ChooseWhat(id) {
        Alert.alert(
            name,
            "O que você deseja fazer?",
            [
              {
                text: "Cancelar",
                style: "cancel"
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

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 3000)
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
            <BtnComponent bgColor="#E76F51" width="80px" height="80px" radius="100px"
                style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 15,
                    zIndex: 999,
                }}
                onPress={() => ChooseWhat(cutId)}
            >
                <BtnText> <Icon name="trash" size={40}/> </BtnText>
            </BtnComponent>

            {/* <Header>
                <HeaderLeft> Gerenciar </HeaderLeft>
                <HeaderButton underlayColor="transparent" onPress={() => ChooseWhat(cutId)}>
                    <HeaderRight style={{marginRight: 10}} color={cutId?'#000':'#43434380'}> <Icon name="trash" size={35} /> </HeaderRight>
                </HeaderButton>
            </Header> */}

                {/* <Texto color={color}> Adicione novos cortes </Texto>

                <DurationView>
                    <Input color={color} bdColor={color} placeholderTextColor={placeColor} placeholder="nome do corte/serviço (infantil, padrão + barba)" onChangeText={n=>setName(n)} />
                    <Input color={color} bdColor={color} placeholderTextColor={placeColor} placeholder="Duração (0~30 minutos)" onChangeText={d=>setDuration(d)} />
                    <Input color={color} bdColor={color} placeholderTextColor={placeColor} placeholder="Preço" onChangeText={p=>setPrice(p)} /> 
                    

                    <BtnComponent mTop="20px" onPress={() => addCut()} bgColor={color} width="90%" radius="100px">
                        <BtnText color={bg}> Finalizar </BtnText>
                    </BtnComponent>
                </DurationView>     */}


                    
                    {/* {cuts.map((c, k) => (
                        <ShimmerPlaceholder
                        style={{height: 60, width: '100%', borderRadius: 100, marginTop: 10, marginBottom: 10}}
                        autoRun={true}
                        visible={isVisible}
                        key={k}
                        >
                        <ItemView>
                            <Pressable onPress={() => ChooseWhat(c.name, c.id, c.duration, c.price)} onLongPress={() => deleteCut(c.id)}
                            style={{
                                flexDirection:'row', backgroundColor: 'transparent', 
                                color: '#333', height: 60, width: '90%', borderRadius: 100, justifyContent: 'center',
                                alignItems: 'center', borderColor: '#333', borderWidth: 1                            
                            }}
                            >
                                <BtnText color={color}> {c.name} </BtnText>
                            </Pressable>
                        </ItemView>
                        </ShimmerPlaceholder>
                    ))} */}

                    <Flat
                    ListHeaderComponent={
                        <>
                            <Texto> 
                                Clique no serviço, e para excluir clique no ícone no canto superior direito
                            </Texto>
                        </>
                    }
                    data={cuts}
                    renderItem={({item}) => <Cutlist data={item} />}
                    keyExtractor={(item) => item.id}
                />
        </Container>
    );
}
