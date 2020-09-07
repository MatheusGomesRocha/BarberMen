import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ItemDefault from '../../components/ItemDefault';
import AppointmentList from '../../lists/AppointmentList';
import {
    Container,
    
    Texto,

    Flat,

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
                        id: documentSnapshot.data().id,
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
            <Flat
                ListHeaderComponent={
                    <>
                        <Texto> Agendamentos </Texto>
                    </>
                    }
                data={appointments}
                renderItem={({item}) => <AppointmentList data={item} />}
                keyExtractor={(item) => item.id.toString()}
            />

        </Container>
    );
}