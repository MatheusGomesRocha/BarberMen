import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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

            <Scroll>
                <Header height="60px" justify="center">
                    <HeaderLeft> Histórico </HeaderLeft>
                </Header>
                <HistoryView>
                    {history.map((h, k) => (
                        <ItemView key={k}>
                            <LeftView>
                                <DefaultText> <Bold> Serviço: </Bold> {h.cut}</DefaultText>
                                <DefaultText> <Bold> Data: </Bold> {h.day}/2020</DefaultText>
                                <DefaultText> <Bold> Barbeiro: </Bold> {h.barber}</DefaultText>
                            </LeftView>
                            <RightView>
                                <DefaultText> <Bold> Preço: </Bold> R$ {h.price}</DefaultText>
                            </RightView>
                        </ItemView>
                    ))}
                </HistoryView>

            </Scroll>

            {/* <DefaultText>
                Você ainda não realizou nenhum agendamento
            </DefaultText> */}
        </Container>
    );
}