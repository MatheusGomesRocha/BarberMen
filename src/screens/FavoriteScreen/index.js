import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import BarberItem from '../../components/BarberItem';

import {
    Container,

    Scroll,
    
    ListArea,
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
            <Scroll>
                <ListArea>
                    {barbers.map((item, k) => (
                        <BarberItem key={k} data={item} />
                    ))}
                </ListArea>
            </Scroll>
        </Container>
    );
}