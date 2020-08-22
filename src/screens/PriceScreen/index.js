import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import Cutlist from '../../FlatListsComponents/cuts';

import {
    SmallText,      // Texto pequeno de introdução
} from '../../components/TextView';

import {
    Header,
    HeaderLeft,
    HeaderRight,
    HeaderButton,
} from '../../components/HeaderComponent';

import { 
    Container,      // View de toda a tela

    Flat,           // FlatList  
} from './style';

export default () => {
    const navigation = useNavigation();     
    
    const [cuts, setCuts] = useState([]);

    const nameCut = useSelector(state => state.user.cut);      // Pegando o corte que foi mandado via redux
    const user = useSelector(state => state.user.email);

    function goToDate() {       // Função ao apertar no botão Seguinte, só funciona se o usuário estiver logado e se tiver selecionado algum serviço
        if(!user) {
            alert('Você precisa estar logado para realizar essa ação');
        } else if(!nameCut) {
            alert('Você precisa escolher um corte');
        } else {
            navigation.navigate('date');
        }
    }

    useEffect(() => {           // Pega os serviços que estão em uma collection "cuts" no firebase e passa para um array
        const subscriber = firestore()
          .collection('cuts')
          .onSnapshot(querySnapshot => {
            const cuts = [];

            querySnapshot.forEach(documentSnapshot => {
                cuts.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });
            });

            setCuts(cuts);
          });
    
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);
 

    return (
        <Container>

            <Header>
                <HeaderLeft> Cortes </HeaderLeft>
                <HeaderButton underlayColor="transparent" onPress={() => goToDate()}>
                    <HeaderRight color={nameCut?'#000':'#434343'}> Seguinte <Icon name="angle-right" size={20} /> </HeaderRight>
                </HeaderButton>
            </Header>
            
                
                {/** FlatList que trás o component com o array */}
                <Flat
                    ListHeaderComponent={
                        <>
                            <SmallText color="#434343"> 
                                Escolha o serviço que deseja
                            </SmallText>
                        </>
                    }
                    data={cuts}
                    renderItem={({item}) => <Cutlist data={item} />}
                    keyExtractor={(item) => item.id}
                />

        </Container>
    );
}

