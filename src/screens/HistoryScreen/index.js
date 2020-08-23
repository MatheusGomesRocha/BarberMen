import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import HistoryList from '../../FlatListsComponents/History';

import {
    Header,
    HeaderLeft,
} from '../../components/HeaderComponent';

import {
    Container,      // Tela

    Flat,           // FlatList

    IfNotView,      // View caso não usuário não tenha historico
    IfNotText,      // Texto caso não usuário não tenha historico
} from './style';


export default () => {
    const [history, setHistory] = useState([]);
    const user = auth().currentUser;      // Pegando usuário logado

        useEffect(() => {       // Pegando os agendamentos do usuário logado no firebase
            if(user) {
                firestore()   
                .collection('appointments')
                .where('userId', '==', user.uid)
                .onSnapshot(querySnapshot => {
                    const historyFire = [];

                    querySnapshot.forEach(documentSnapshot => {     // Passando os dados para um array e depois enviando para o FlatList como prop
                        historyFire.push({      
                            ...documentSnapshot.data(),
                            key: documentSnapshot.id,
                        });
                    });

                    setHistory(historyFire);
                });
            }
            } ,[]);

    return(
        <Container>
            {user?
                history?
                    <Flat
                        ListHeaderComponent={
                            <>
                                <Header height="60px" justify="center">
                                        <HeaderLeft> Histórico </HeaderLeft>
                                </Header>
                            </>
                        }
                        data={history}
                        renderItem={({item}) => <HistoryList data={item} />}
                        keyExtractor={(item) => item.id} 
                    />
            :
            <>
                <Header height="60px" justify="center">
                    <HeaderLeft> Histórico </HeaderLeft>
                </Header>
            
                <IfNotView>
                    <Icon name="clipboard" size={35} />
                    <IfNotText> Você ainda não agendou nenhum serviço para ter um histórico </IfNotText>
                </IfNotView> 
            </>
            : 
            <>
                <Header height="60px" justify="center">
                    <HeaderLeft> Histórico </HeaderLeft>
                </Header>
            
                <IfNotView>
                    <Icon name="clipboard" size={35} />
                    <IfNotText> Você precisa está logado para ver seu histórico </IfNotText>
                </IfNotView> 
            </>
            }
        </Container>
    );
}