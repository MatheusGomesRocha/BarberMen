import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ItemDefault from '../../components/ItemDefault';

import {
    Container,
    
    Scroll,

    Texto,

    ListArea,
} from './style';

export default () => {
    const [appointments, setAppointments] = useState([]);
    

    const userInfo = auth().currentUser;

    useEffect(() => {       // Pega os dados na collection "users" do usuário logado, e setar em uma state, Email, Name, Avatar e Password
            firestore()
            .collection('appointments')
            .where('userId', '==', userInfo.uid)
            .onSnapshot(querySnapshot => {
                const appointmentsFire = [];

                querySnapshot.forEach(documentSnapshot => {
                    appointmentsFire.push({
                        barberName: documentSnapshot.data().barberName,
                        serviceName: documentSnapshot.data().serviceName,
                        servicePrice: documentSnapshot.data().servicePrice,
                        date: documentSnapshot.data().date,
                        hour: documentSnapshot.data().hour,
                        done: documentSnapshot.data().done,
                    });
                });

                setAppointments(appointmentsFire);
            });
    }, [])



    return(
        <Container>
            <Scroll>
            <Texto> Agendamentos </Texto>
                <ListArea>
                    {appointments.map((item, k) => (
                        <ItemDefault key={k}data={item} />
                    ))}
                </ListArea>
            </Scroll>
        </Container>
    );
}