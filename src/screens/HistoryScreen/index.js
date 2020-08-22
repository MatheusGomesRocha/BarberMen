import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import HistoryList from '../../FlatListsComponents/History';

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

    Flat,

    HistoryView,
    ItemView,
    LeftView,
    RightView,
    DefaultText,
    Bold,

} from './style';


export default () => {
    const [history, setHistory] = useState([]);
    const userId = auth().currentUser;

    
    useEffect(() => {
          firestore()
          .collection('appointments')
          .where('userId', '==', userId.uid)
          .onSnapshot(querySnapshot => {
            const historyFire = [];

            querySnapshot.forEach(documentSnapshot => {
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