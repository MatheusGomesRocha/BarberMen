import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import HistoryList from '../../FlatListsComponents/History';

import {
    Header,
    HeaderLeft,
} from '../../components/HeaderComponent';

import {
    Container,      // Tela

    Flat,           // FlatList
} from './style';


export default () => {
    const [history, setHistory] = useState([]);
    const user = auth().currentUser;      // Pegando usuário logado

    
    useEffect(() => {       // Pegando os agendamentos do usuário logado no firebase
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
        } ,[]);
    
    return(
        <Container>
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


            {/* <DefaultText>
                Você ainda não realizou nenhum agendamento
            </DefaultText> */}
        </Container>
    );
}