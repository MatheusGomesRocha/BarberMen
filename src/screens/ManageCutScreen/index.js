import React, {useState, useEffect} from 'react';
import BtnComponent from '../../components/BtnComponent';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cutlist from '../../FlatListsComponents/CutManage';
import {Alert, Dimensions} from 'react-native';


import {
    Container,      // Tela

    Texto,          // Header

    BtnText,        // Texto do Button  

    Flat,           // FlatList
} from './style';

export default () => {
    const [cuts, setCuts] = useState([]); // Array com os cortes

    const cutId = useSelector(state => state.user.cut);

    const screenSize = Math.round(Dimensions.get('window').width);  // Pegando tamanho da tela do celular
    let middle = Math.round(screenSize / 2 - 35);

    function deleteCut(id) {        // Função que deleta o corte/serviço selecionado pelo Admin ao clicar em "DELETAR" no Alert
        firestore()
        .collection('cuts')
        .doc(id)
        .delete()
        .then(() => {
            alert('Serviço deletado');
        })
    }

    function ChooseWhat(id) {       // Abre um alert perguntando se o Admin tem certeza que deseja deletar
        Alert.alert(
            cutId, 'Tem certeza que você deseja deletar este produto?',
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

    useEffect(() => {               // Seta todos os Documents da Collection "cuts" do firebase em um array
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

    return(
        <Container>
            <BtnComponent bgColor="#E76F51" width="70px" height="70px" radius="100px"
                style={{
                    position: 'absolute',
                    bottom: 15,
                    right: middle,
                    zIndex: 999,
                }}
                onPress={() => ChooseWhat(cutId)}
            >
                <BtnText> <Icon name="trash" size={40}/> </BtnText>
            </BtnComponent>

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
