import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ItemDefault from '../../components/ItemDefault';
import AppointmentList from '../../lists/AppointmentList';
import Api from '../../Api';

import {
    Container,
    
    Texto,

    Flat,
} from './style';

export default () => {
    const [appointments, setAppointments] = useState([]);
    
    const userInfo = auth().currentUser;

    useEffect(() => {       // Pega os dados na collection "users" do usuário logado, e setar em uma state, Email, Name, Avatar e Password
        const getAppointments = async ()  => {
            let json = await Api.getAppointments(userInfo.uid);

            setAppointments(json);
        }

        getAppointments();
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