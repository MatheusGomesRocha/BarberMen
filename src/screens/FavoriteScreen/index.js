import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import BarberItem from '../../components/BarberItem';
import BarberList from '../../lists/BarberList';

import {
    Container,

    Flat
} from './style';

export default () => {
    const [barbers, setBarbers] = useState([]);
    const [loading, setLoading] = useState(false);

    const userInfo = auth().currentUser;

    const getBarbers = async () => {
        setLoading(true);
        setBarbers([]);
        
            firestore()
            .collection('barbers')
            .onSnapshot(querySnapshot => {
            const favoriteFire = [];

            querySnapshot.forEach(documentSnapshot => {
                favoriteFire.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });
            });

            setBarbers(favoriteFire);
            setLoading(false);
          });
    }

    useEffect(() => {
        getBarbers();
    }, [])

    
    return(
        <Container>
            <Flat
                data={barbers}
                renderItem={({item}) => <BarberList data={item} />}
            />
        </Container>
    );
}